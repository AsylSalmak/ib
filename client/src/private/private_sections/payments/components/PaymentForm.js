import React, { useState } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import "../components/Payments.css";

const PaymentForm = (props) => {
  const { accounts } = useSelector((store) => store.accounts);
  const [selectedAccount, setSelectedAccount] = useState();
  const [paymentTo, setPaymentTo] = useState("");
  const [amount, setAmount] = useState("");

  const options = Object.keys(accounts).map((accId) => {
    const account = accounts[accId];
    return {
      key: accId,
      text: `${account.account} (${account.balance} ${account.currencyCode})`,
      value: accId,
    };
  });

  return (
    <div className="PaymentsForm">
      <Form>
        <Form.Field>
            <label>Выберите счет</label>
          <Dropdown
          placeholder="Выберите счет"
            value={selectedAccount}
            onChange={(e, data) => {
              setSelectedAccount(data.value);
            }}
            options={options}
            selection
          />
        </Form.Field>
        {props.serviceId === "111" ? (
          <Form.Field>
            <label>Введите номер телефона</label>
            <input
              placeholder="номер телефона"
              type="number"
              value={paymentTo}
              onChange={(e) => {
                setPaymentTo(e.target.value);
              }}
            />
          </Form.Field>
        ) : (
          <Form.Field>
            <label>Лицевой счет</label>
            <input
              placeholder="Лицевой счет"
              value={paymentTo}
              onChange={(e) => {
                setPaymentTo(e.target.value);
              }}
            />
          </Form.Field>
        )}
        <Form.Field>
          <label>Введите Сумму</label>
          <input
            placeholder="Сумма"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Form.Field>
        <Button
        color='blue'
          disabled={selectedAccount && paymentTo && amount ? false : true}
          type="submit"
        >
          Оплатить
        </Button>
      </Form>
    </div>
  );
};
export default PaymentForm;
