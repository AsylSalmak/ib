import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import AccountSelect from "./AccountSelect";
import CardOfAnyBank from "./CardOfAnyBank";
import Sumform from "./Sumform";
import TransferCardForm from "./TransferCardForm";
import TransferAtmNumber from "./TransferAtmNumber";
import TransferMobileNumber from "./TransferMobileNumber";
import CardAccountform from "./CardAccountform";
import { useSelector } from "react-redux";
import Messages from "./Messages";

const TransfersForm = ({ transferId, transferFormLabel, setTransfersId }) => {
  const { accounts } = useSelector((store) => store.accounts);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [currencyConversion, setCurrencyConversion] = useState([]);
  const accountsArray = Object.values(accounts);

  const accountsCard = accountsArray.filter((el) => {
    return el.type === "card";
  });
  const filteredAccount = accountsArray.filter((el) => {
    return el.type === "account";
  });
  const deposit = accountsArray.filter((el) => {
    return el.type === "deposit";
  });

  useEffect(() => {
    if (
      accountsArray.length &&
      selectedAccount &&
      transferId === "conversion_account"
    ) {
      let currencyCode = accountsArray.filter((el) => {
        return el.currencyCode !== accounts[selectedAccount].currencyCode;
      });
      setCurrencyConversion(currencyCode);
    }
  }, [selectedAccount, accountsArray.length, transferTo]);

  useEffect(() => {
    if (accountsArray.length && transferId === "internal_transfer") {
      const filtered = accountsCard.filter((el) => {
        return el.id != selectedAccount;
      });
      setFiltered(filtered);

      setTransferTo(filtered[0].id);
    }
  }, [selectedAccount]);

  useEffect(() => {
    if (accountsArray.length && transferId === "internal_transfer") {
      const filtered = accountsCard.filter((el) => {
        return el.id != selectedAccount;
      });
      setFiltered(filtered);

      setTransferTo(filtered[0].id);
    }
  }, [accounts]);

  const renderTransferForm = (transferId) => {
    switch (transferId) {
      case "card_to_card":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              selectedAccount={selectedAccount}
              options={accountsCard}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <CardOfAnyBank
              setTransferTo={setTransferTo}
              transferTo={transferTo}
            />
          </>
        );

      case "to_foreign_card":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              options={accountsCard}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <TransferCardForm
              setTransferTo={setTransferTo}
              transferTo={transferTo}
            />
          </>
        );
      case "to_atm":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              options={accountsCard}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <TransferAtmNumber
              setTransferTo={setTransferTo}
              transferTo={transferTo}
            />
          </>
        );

      case "to_mobile_card":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              options={accountsCard}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <TransferMobileNumber
              setTransferTo={setTransferTo}
              transferTo={transferTo}
            />
          </>
        );

      case "internal_transfer":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              selectedAccount={selectedAccount}
              options={accountsCard}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <AccountSelect
              selectedAccount={transferTo}
              options={filtered}
              label={"Выберите карту"}
              setSelectedAccount={setTransferTo}
            />
          </>
        );

      case "card_to_account":
        return (
          <>
            <AccountSelect
              label={"Выберите карту"}
              selectedAccount={selectedAccount}
              options={accountsCard}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <AccountSelect
              label={"Выберите счет"}
              selectedAccount={transferTo}
              options={filteredAccount}
              setSelectedAccount={setTransferTo}
            />
          </>
        );
      case "account_to_card":
        return (
          <>
            <AccountSelect
              label={"Выберите счет"}
              options={accountsCard}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <AccountSelect
              label={"Выберите карту"}
              options={filteredAccount}
              selectedAccount={transferTo}
              setSelectedAccount={setTransferTo}
            />
          </>
        );
      case "deposit_withdraw":
        return (
          <>
            <AccountSelect
              label={"Выберите депозитный счет"}
              options={deposit}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <CardAccountform
              options1={accountsCard}
              options2={filteredAccount}
              selectedAccount={transferTo}
              setSelectedAccount={setTransferTo}
            />
          </>
        );
      case "deposit_fulfill":
        return (
          <>
            <CardAccountform
              options1={accountsCard}
              options2={filteredAccount}
              setSelectedAccount={setSelectedAccount}
              selectedAccount={selectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <AccountSelect
              label={"Выберите депозитный счет"}
              options={deposit}
              setSelectedAccount={setTransferTo}
              selectedAccount={transferTo}
            />
          </>
        );
      case "conversion_account":
        return (
          <>
            <AccountSelect
              selectedAccount={selectedAccount}
              label={"Выберите счет"}
              options={accountsArray}
              setSelectedAccount={setSelectedAccount}
            />
            <div className="TransfersFormIcon">
              <Icon name="angle right" size="big" />
            </div>
            <AccountSelect
              selectedAccount={transferTo}
              label={"Выберите счет"}
              options={currencyConversion}
              setSelectedAccount={setTransferTo}
            />
          </>
        );
      case "Messages":
        return <Messages />;
    }
  };

  return (
    <div>
      <h5>{transferFormLabel}</h5>
      <div className="TransferForm">
        {renderTransferForm(transferId)}
        {transferId === "Messages" ? null : (
          <Sumform
            transferTo={transferTo}
            selectedAccount={selectedAccount}
            transferId={transferId}
            setTransfersId={setTransfersId}
          />
        )}
      </div>
    </div>
  );
};
export default TransfersForm;
