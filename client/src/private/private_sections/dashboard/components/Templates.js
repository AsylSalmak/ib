import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Operations from "./Operations";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
import { useSelector } from "react-redux";


const Tempaltes = () => {
  const [payments, setPayments] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const { accounts, accountsFetched } = useSelector((store) => store.accounts);
  useEffect(() => {
    axios({
      method: "get",
      url: "templates",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      const payment = [];
      const transfer = [];
      response.data.forEach((account) => {
        switch (account.type) {
          case "payment":
            payment.push(account);
            break;
          case "transfer":
            transfer.push(account);
            break;
        }
      });
      setPayments(payment);
      setTransfers(transfer);
    });
  }, []);
  return (
    <div className="Dashboard-block">
      <h4>Мои платежи</h4>
      <div>
        {accountsFetched ? payments.map((payment, index) => (
          <div className="paymentCont">
            <div className="paymentBox">
              <div className="paymentTxt">
                <label>{payment.alias}</label>
                <label>{payment.service}</label>
                <p>{payment.provider}</p>
              </div>
              <div className="amountBox">
                <span>{formatToCurrencyNumber(payment.amount)}</span> {"  "}
                <span>{payment.currency}</span>
              </div>
            </div>
            <div className="linkPaymentBox">
              <Link className="linkPayment" to="">
                Повторить платеж
              </Link>
            </div>
          </div>
        )):null}
      </div>
      <h4>Мои переводы</h4>
      <div>
        {accountsFetched ? transfers.map((transfer, index) => (
          <div className="transfersCont">
            {transfer.transferType === "internal" ? (
              <div
                style={{
                  width: "50px",
                  backgroundColor: "#ed6262",
                  borderBottomRightRadius: "10px",
                  fontSize: "10px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {transfer.transferType}
              </div>
            ) : (
              <div
                style={{
                  width: "50px",
                  backgroundColor: "#508bdf",
                  color: "#fff",
                  borderBottomRightRadius: "10px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                {transfer.transferType}
              </div>
            )}
            <div className="transfersBox">
              <div className="transfersTxt">
                <label>{transfer.alias}</label>
                <label> {accounts[transfer.from].account}</label>
                <p>{transfer.to}</p>
              </div>
              <div className="amountBox">
                <span>{formatToCurrencyNumber(transfer.amount)}</span>
                {"  "} <span>{transfer.currency}</span>
              </div>
            </div>
            <div className="linkTransfersBox">
              <Link className="linkTransfer" to="">
                Повторить перевод
              </Link>
            </div>
          </div>
        )): null}
      </div>
      <h4>Последние операции</h4>
      <div className="Dashboard-operations">
        <Operations />
      </div>
    </div>
  );
};
export default Tempaltes;
