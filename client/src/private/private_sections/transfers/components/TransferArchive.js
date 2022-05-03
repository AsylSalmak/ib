import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "semantic-ui-react";
import moment from "moment";
import axios from "axios";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
const TransferArchive = () => {
  const { accounts, accountsFetched } = useSelector((store) => store.accounts);
  const [operations, setOperations] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "operations",
      baseURL: "https://ib-nest-server.herokuapp.com/",
    }).then((response) => {
      setOperations(response.data);
    });
  }, []);

  const TransferArchive = operations.filter((el) => {
    return el.type === "transfer";
  });

  return (
    <>
      <div className="TransferArchive-label">
        <div className="TransferArchive-id">Номер</div>
        <div className="TransferArchive-from">Откуда</div>
        <div className="TransferArchive-to">Куда</div>
        <div className="TransferArchive-date">Дата</div>
        <div className="TransferArchive-amount">Сумма</div>
      </div>
      {accountsFetched && operations.length ? (
        <>
          {TransferArchive.map((el) => (
            <div className="TransferArchive" key={el.id}>
              <div className="TransferArchive-id">{el.id}</div>
              <div className="TransferArchive-from">
                {accounts[el.from].account}
              </div>
              <div className="TransferArchive-to">{el.to}</div>
              <div className="TransferArchive-date">
                {moment(el.date).format("DD.MM.YYYY HH:mm")}
              </div>
              <div className="TransferArchive-amount">
                {formatToCurrencyNumber(el.amount)}
                {el.currency}
              </div>
            </div>
          ))}
        </>
      ) : (
        <Placeholder style={{ width: "90%", margin: "20px" }} fluid>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="very long" />
        </Placeholder>
      )}
    </>
  );
};
export default TransferArchive;
