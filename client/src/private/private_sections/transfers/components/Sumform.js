import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACCOUNTS } from "../../../../accounts/reducer/AccountsReducer";

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

  const balance = accounts[props.selectedAccount]
    ? accounts[props.selectedAccount].balance
    : 0;

  return (
    <div className="SumFormConteiner">
      <div className="SumForm">
        <label>Сумма</label>
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
              ? "## # KZT"
              : amount.toString().length === 3
              ? "# ### KZT"
              : amount.toString().length === 4
              ? "# #### KZT"
              : amount.toString().length === 5
              ? "## #### KZT"
              : amount.toString().length === 6
              ? "### ### # KZT"
              : amount.toString().length === 7
              ? "# ### #### KZT"
              : amount.toString().length === 8
              ? "## ### #### KZT"
              : amount.toString().length === 9
              ? "### ### ### KZT"
              : "## KZT"
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
              url: "transfers/proceed",
              baseURL: "http://127.0.0.1:3000",
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
          Перевести
        </Button>
      </div>
    </div>
  );
};
export default Sumform;
