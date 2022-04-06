import axios from "axios";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { hideLetters } from "../../../../helpers/hideLetters";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";
import { useSelector } from "react-redux";
import {
  Icon,
  Placeholder,
  Checkbox,
  Input,
  Pagination,
  Popup,
} from "semantic-ui-react";
import "../../operations/components/operations.css";

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

  //sum filter
  const [sumFilter, setSumFilter] = useState("");
  const [sumFilterText, setSumFilterText] = useState("");

  //filter type
  const [selectTypeFilterPayment, setSelectTypeFilterPayment] = useState(false);
  const [selectTypeFilterTransfer, setSelectTypeFilterTransfer] =
    useState(false);
  //filter search
  const [searchText, setSearchText] = useState("");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [operationsPerPage, setOperationsPerPage] = useState(5);

  useEffect(() => {
    axios({
      method: "get",
      url: "operations",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setOriginOperations(response.data);
      setOperations(response.data);
    });
    return () => {};
  }, []);

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
    console.log("ashdjaksh");
    let filteredOperations;

    //filter by search
    filteredOperations = originOperations.filter((el) => {
      let StrId = el.id.toString();
      return StrId.startsWith(searchText.toLocaleUpperCase());
    });

    //filter by sum
    filteredOperations = filteredOperations.filter((el) => {
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

    if (selectTypeFilterPayment !== selectTypeFilterTransfer) {
      filteredOperations = filteredOperations.filter((el) => {
        if (selectTypeFilterPayment) return el.type === "payment";
        return el.type === "transfer";
      });
    }

    // setCurrentPage(1);

    setOperations(filteredOperations);
    setCurrentPage(1);
  }, [
    sumFilter,
    selectTypeFilterPayment,
    selectTypeFilterTransfer,
    searchText,
  ]);

  //pagination
  console.log(operations.length);

  console.log("currentpage", currentPage);

  console.log("operperpage", operationsPerPage);

  const pageLength = Math.ceil(operations.length / operationsPerPage);
  const from = (currentPage - 1) * operationsPerPage;
  const paginatedOperations = operations.slice(from, from + operationsPerPage);

  return (
    <div className="operations-table">
      <div className="operations-table-filter-box">
        {sumFilterText ? (
          <Icon
            style={{ cursor: "pointer" }}
            name="close"
            onClick={(e) => {
              setSumFilter("");
              setSumFilterText("");
            }}
          />
        ) : (
          <Icon name="filter" />
        )}

        <Popup
          content={
            <div>
              {sumFilters.map((item) => (
                <div
                  key={item.id}
                  className="sumfilterBox"
                  onClick={() => {
                    setSumFilter(item.id);
                    setSumFilterText(item.text);
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>
          }
          on="click"
          pinned
          trigger={
            <div>
              {sumFilterText ? (
                <div className="sumfilter">
                  <span style={{ cursor: "pointer" }}>{sumFilterText}</span>
                </div>
              ) : (
                <div className="sumfilter">
                  <span style={{ cursor: "pointer" }}>По сумме</span>
                </div>
              )}
            </div>
          }
          position="bottom left"
        />
        <div className="operationsFilterType">
          <Popup
            content={
              <div>
                <Checkbox
                  label={"payment"}
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
            }
            on="click"
            pinned
            trigger={
              <div>
                <Icon name="filter" />
                <span style={{ cursor: "pointer" }}>
                  {selectTypeFilterPayment ? "payment" : null}
                  {selectTypeFilterTransfer? "transfer": null}
                  {!selectTypeFilterPayment && !selectTypeFilterTransfer?"По типу": null}
                </span>
              </div>
            }
            position="bottom left"
          />
        </div>

        <div className="operationsSearchBox">
          <Input
            value={searchText}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/[^0-9.]/g, "");
              setSearchText(value);
            }}
            icon="search"
            placeholder="Поиск по номеру..."
          />
        </div>
      </div>
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
        paginatedOperations.map((operation, index) => (
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

      <div>
        <select
          onChange={(e) => {
            setCurrentPage(1);
            setOperationsPerPage(+e.target.value);
          }}
          defaultValue={operationsPerPage}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <div className="operationsPaginationsNumbersBox">
        <Pagination
          onPageChange={(e, data) => {
            console.log(data);
            setCurrentPage(data.activePage);
          }}
          size="mini"
          activePage={currentPage}
          firstItem={null}
          lastItem={null}
          totalPages={pageLength}
        />
      </div>
    </div>
  );
};
export default Operations;
