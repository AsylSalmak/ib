import React, { useState, useEffect } from "react";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACCOUNTS } from "../../../../accounts/reducer/AccountsReducer";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
const chekTransferTo = (transferTo, transferId) => {
  switch (transferId) {
    case "card_to_card":
    case "to_foreign_card":
      return transferTo.length === 16;

    case "to_atm":
    case "to_mobile_card":
      return transferTo.length === 9;

    default:
      return transferTo.length === 3;
  }
};

const Sumform = (props) => {
  const { accounts } = useSelector((store) => store.accounts);

  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [conversion, setConversion] = useState("");
  const balance = accounts[props.selectedAccount]
    ? accounts[props.selectedAccount].balance
    : 0;
  const currencyCode1 = accounts[props.selectedAccount]
    ? accounts[props.selectedAccount].currencyCode
    : 0;

  const currencyCode2 = accounts[props.transferTo]
    ? accounts[props.transferTo].currencyCode
    : 0;

  // console.log(props.selectedAccount);
  // console.log(props.transferTo);

  useEffect(() => {
    if (props.transferId === "conversion_account") {
      let conversion;
      if (currencyCode1 === "KZT" && currencyCode2 === "USD") {
        conversion = amount / 453;
      }
      if (currencyCode1 === "USD" && currencyCode2 === "KZT") {
        conversion = amount * 453;
      }
      if (currencyCode1 === "KZT" && currencyCode2 === "RUB") {
        conversion = amount / 5.43;
      }
      if (currencyCode1 === "RUB" && currencyCode2 === "KZT") {
        conversion = amount * 5.43;
      }
      if (currencyCode1 === "RUB" && currencyCode2 === "USD") {
        conversion = amount / 79;
      }
      if (currencyCode1 === "USD" && currencyCode2 === "RUB") {
        conversion = amount * 79;
      }
      setConversion(conversion);
    }
  }, [currencyCode2, currencyCode1, amount]);

  return (
    <div className="SumFormConteiner">
      <div className="SumForm">
        {props.transferId === "conversion_account" ? (
          <p>
            {`Вы собираетесь конвертировать ${formatToCurrencyNumber(
              conversion
            )}${currencyCode2}`}
          </p>
        ) : (
          <label>Сумма</label>
        )}

        <NumberFormat
          onChange={(e) => {
            let value = e.target.value;
            value = +value.replace(/[^0-9.]/g, "");
            setAmount(value);
          }}
          value={amount}
          style={{ width: "90%" }}
          placeholder="Введите сумму"
          customInput={Input}
          format={
            amount.toString().length === 2
              ? `## # ${currencyCode1}`
              : amount.toString().length === 3
              ? `# ### ${currencyCode1}`
              : amount.toString().length === 4
              ? `# #### ${currencyCode1}`
              : amount.toString().length === 5
              ? `## #### ${currencyCode1}`
              : amount.toString().length === 6
              ? `### ### # ${currencyCode1}`
              : amount.toString().length === 7
              ? `# ### #### ${currencyCode1}`
              : amount.toString().length === 8
              ? `## ### ### ${currencyCode1}`
              : amount.toString().length === 9
              ? `### ### ### ${currencyCode1}`
              : `## ${currencyCode1}`
          }
        />

        <Button
          style={{
            width: "90%",
            height: "40px",
            margin: "15px",
            fontSize: "16px",
          }}
          color="blue"
          disabled={
            !(
              props.transferId &&
              props.transferTo &&
              chekTransferTo(props.transferTo, props.transferId) &&
              props.selectedAccount &&
              amount &&
              amount < balance
            )
          }
          loading={loading}
          onClick={() => {
            setLoading(true);
            axios({
              method: "post",
              url: `${
                props.transferId === "conversion_account"
                  ? "conversion"
                  : "transfers"
              }/proceed`,
              baseURL: "https://ib-nest-server.herokuapp.com/",
              data: {
                amount: amount,
                transferId: props.transferId,
                transferTo: props.transferTo,
                account: props.selectedAccount,
              },
            }).then((response) => {
              setLoading(false);
              props.setTransfersId("Messages");
              const accounts = response.data.reduce(
                (previousValue, currentValue) => {
                  return {
                    ...previousValue,
                    [currentValue.id]: currentValue,
                  };
                },
                {}
              );
              dispatch({
                type: SET_ACCOUNTS,
                payload: accounts,
              });
              setTimeout(() => {
                props.setTransfersId("");
              }, 2000);
            });
          }}
        >
          {props.transferId === "conversion_account"
            ? "Конвертировать"
            : "Перевести"}
        </Button>
      </div>
    </div>
  );
};
export default Sumform;
