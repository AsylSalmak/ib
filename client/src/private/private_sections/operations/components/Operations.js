import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { hideLetters } from "../../../../helpers/hideLetters";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
import { useSelector } from "react-redux";
import { Icon, Placeholder } from "semantic-ui-react";
import "../../operations/components/operations.css";

const headers = [
  { title: "Номер", field: "id" },
  { title: "Дата", field: "date" },
  { title: "Тип", field: "type" },
  { title: "Счет", field: "from" },
  { title: "Детали", field: "details" },
  { title: "Сумма", field: "amount" },
];

const Operations = () => {
  const { accounts, accountsFetched } = useSelector((store) => store.accounts);
  const [operations, setOperations] = useState([]);
  const [sort, setSort] = useState({ field: "id", type: true });

  useEffect(() => {
    axios({
      method: "get",
      url: "operations",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setOperations(response.data);
    });
  }, []);

useEffect(()=>{
  let sortedOperations = [...operations];

  sortedOperations.sort((a, b) => {
    console.log(sort.type);
    if (sort.type) {
      return a[sort.field] > b[sort.field] ? 1 : -1;
    }
    return a[sort.field] < b[sort.field] ? 1 : -1;
  });

  console.log(sortedOperations);

  setOperations(sortedOperations)

}, [sort])
 

  return (
    <div className="operations-table">
      <div className="operations-row header">
        {headers.map((el) => (
          <div key={el.field} className={el.field}>
            <span>{el.title}</span>
            <Icon
              onClick={() => {
                const field = el.field === sort.field ? sort.field : el.field;
                setSort({ field, type: !sort.type });
              }}
              size="small"
              name="sort"
            />
          </div>
        ))}
      </div>
      {accountsFetched ? (
        operations.map((operation, index) => (
          <div key={operation.id} className="operations-row">
            <div className="id">{operation.id}</div>
            <div className="date">
              {moment(operation.date).format("DD.MM.YYYY HH:mm")}
            </div>
            <div className="type">{operation.type}</div>
            <div className="from">
              {hideLetters(accounts[operation.from].account)}
            </div>
            <div className="details">{operation.provider || operation.to}</div>
            <div className="amount">
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
