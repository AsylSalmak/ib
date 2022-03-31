import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
import { Placeholder } from "semantic-ui-react";
import { hideLetters } from "../../../../helpers/hideLetters";

const Operations = () => {
  const [operations, setOperations] = useState([]);
  const { accounts, accountsFetched } = useSelector((store) => store.accounts);
  useEffect(() => {
    axios({
      method: "get",
      url: "operations/last",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setOperations(response.data);
    });
  }, []);

  return (
    <div>
      {accountsFetched ? (
        operations.map((operation, index) => (
          <div className="operationsBox">
            <div>
              <label>Дата операции:</label>
              {moment(operation.date).format("DD.MM.YYYY HH:mm")}
            </div>
            <div>
              <label>Номер операции:</label>
              {operation.id}
            </div>
            <div>
              <label>Тип операции:</label>
              {operation.type}
            </div>
            <div>
              {operation.provider ? (
                <div>
                  <label>Куда:</label>
                  {operation.provider}
                </div>
              ) : null}
              <label>Со счета:</label>
              {hideLetters(accounts[operation.from].account)}
            </div>
            <div>
              <label>Сумма:</label>
              <span>{formatToCurrencyNumber(operation.amount)}</span>{" "}
              <span>{operation.currency}</span>
            </div>
          </div>
        ))
      ) : (
        <Placeholder style={{ width: "90%", margin: "20px" }} fluid>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="very long" />
        </Placeholder>
      )}
    </div>
  );
};
export default Operations;
