import axios from "axios";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { hideLetters } from "../../../../helpers/hideLetters";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
import { useSelector } from "react-redux";
import { Icon, Placeholder, Checkbox, Radio, Form } from "semantic-ui-react";
import "../../operations/components/operations.css";
import { Fade } from "react-bootstrap";

const headers = [
  { title: "Номер", field: "id" },
  { title: "Дата", field: "date" },
  { title: "Тип", field: "type" },
  { title: "Счет", field: "from" },
  { title: "Детали", field: "to" },
  { title: "Сумма", field: "amount" },
];

const sumFilters = [
  { id: "1", text: "до 10 000" },
  { id: "2", text: "от 10 000 до 50 000" },
  { id: "3", text: "от 50 000" },
];

const Operations = () => {
  const { accounts, accountsFetched } = useSelector((store) => store.accounts);
  const [originOperations, setOriginOperations] = useState([]);
  const [operations, setOperations] = useState([]);
  const [sort, setSort] = useState({ field: "id", type: true });

  const [sumFilterBox, setSumFilterBox] = useState(false);
  const [sumFilter, setSumFilter] = useState("");
  const [sumFilterText, setSumFilterText] = useState("");

  const [typeFilterBox, setTypeFilterBox] = useState(false);
  const [selectTypeFilterPayment, setSelectTypeFilterPayment] = useState(false);
  const [selectTypeFilterTransfer, setSelectTypeFilterTransfer] =
    useState(false);

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('close');
        setTypeFilterBox(!typeFilterBox);
      }
    }

    document.addEventListener("click", handleClickOutside);

    axios({
      method: "get",
      url: "operations",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setOriginOperations(response.data);
      setOperations(response.data);
    });
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [typeFilterBox]);

  useEffect(() => {
    let sortedOperations = [...operations];

    sortedOperations.sort((a, b) => {
      let val1 = a[sort.field];
      let val2 = b[sort.field];

      if (sort.field !== "to") {
        val1 = isNaN(val1) ? val1 : +val1;
        val2 = isNaN(val2) ? val2 : +val2;
      }

      if (sort.type) {
        return val1 > val2 ? 1 : -1;
      }
      return val1 < val2 ? 1 : -1;
    });

    setOperations(sortedOperations);
  }, [sort.field, sort.type]);

  useEffect(() => {
    const SumFiltered = originOperations.filter((el) => {
      const amount = +el.amount;
      if (sumFilter === "1") {
        return amount <= 10000;
      } else if (sumFilter === "2") {
        return amount > 10000 && amount < 50000;
      } else if (sumFilter === "3") {
        return amount >= 50000;
      } else {
        return true;
      }
    });

    if (
      (!selectTypeFilterPayment && !selectTypeFilterTransfer) ||
      (selectTypeFilterPayment && selectTypeFilterTransfer)
    ) {
      setOperations(SumFiltered);
      return;
    }

    const TypeFiltered = SumFiltered.filter((el) => {
      if (selectTypeFilterPayment) return el.type === "payment";
      return el.type === "transfer";
    });
    setOperations(TypeFiltered);
  }, [sumFilter, selectTypeFilterPayment, selectTypeFilterTransfer]);

  return (
    <div className="operations-table">
      <div className="operations-table-filter-box">
        {sumFilter ? (
          <div style={{ marginBottom: "15px" }}>
            <Icon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSumFilter("");
              }}
              name="close"
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setSumFilterBox(!sumFilterBox);
              }}
            >
              {sumFilterText}
            </span>
          </div>
        ) : (
          <div style={{ marginBottom: "15px" }}>
            <Icon name="filter" />
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setSumFilterBox(!sumFilterBox);
              }}
            >
              По сумме
            </span>
          </div>
        )}
        <div className="operationsFilterType">
          <Icon name="filter" />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setTypeFilterBox(!typeFilterBox);
            }}
          >
            По типу
          </span>
          {typeFilterBox ? (
            <div ref={ref} className="operationsFilterType-box">
              <Checkbox
                label={"payment"}
                className="asda"
                checked={selectTypeFilterPayment}
                onChange={() => {
                  setSelectTypeFilterPayment(!selectTypeFilterPayment);
                }}
              />
              <Checkbox
                label={"transfer"}
                checked={selectTypeFilterTransfer}
                onChange={() => {
                  setSelectTypeFilterTransfer(!selectTypeFilterTransfer);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      {sumFilterBox ? (
        <div key={item.id} className="operationsFilterSum">
          {sumFilters.map((item) => (
            <div
              onClick={() => {
                setSumFilter(item.id);
                setSumFilterText(item.text);
                setSumFilterBox(false);
              }}
              className="operationsFilterSumBox"
            >
              {item.text}
            </div>
          ))}
        </div>
      ) : null}
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
            <div className="details">
              {operation.to +
                (operation.provider ? ` (${operation.provider})` : "")}
            </div>
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
