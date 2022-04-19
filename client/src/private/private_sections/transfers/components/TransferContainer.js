import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import Transfers from "./Transfers";
import TransfersForm from "./TransfersForm";
import "../components/Transfers.css";
import TransferArchive from "./TransferArchive";
const externalTransfers = [
  {
    id: "card_to_card",
    icon: "cc mastercard",
    label: "С карты на карту любых банков РК",
  },
  {
    id: "to_foreign_card",
    icon: "credit card outline",
    label: "На зарубежную карту",
  },
  { id: "to_atm", icon: "zip", label: "На банкомат" },
  {
    id: "to_mobile_card",
    icon: "mobile",
    label: "На карту по мобильному телефону",
  },
];

const internalTransfers = [
  {
    id: "internal_transfer",
    icon: "cc mastercard",
    label: "Между своими картами",
  },
  { id: "card_to_account", icon: "cc mastercard", label: "С карты на счет" },
  { id: "account_to_card", icon: "cc mastercard", label: "Со счета на карту" },
  {
    id: "deposit_withdraw",
    icon: "money bill alternate outline",
    label: "Снятие с депозита",
  },
  {
    id: "deposit_fulfill",
    icon: "money bill alternate",
    label: "Пополнение депозита",
  },
];

const conversion = [
  { id: "conversion_account", icon: "sync", label: "По счетам" }
];

const TransferContainer = () => {
  const [value, setValue] = useState("");

  const [transferId, setTransfersId] = useState("");
  const [transferFormLabel, setTransferFormLabel] = useState("");

  const [tab, setTab] = useState("Переводы");
  return (
    <div>
      <Menu>
        <Menu.Item
          name="Переводы"
          active={tab === "Переводы"}
          onClick={() => {
            setTab("Переводы");
            setTransfersId("");
          }}
        />
        <Menu.Item
          name="Архив переводов"
          active={tab === "Архив переводо"}
          onClick={() => {
            setTab("Архив переводов");
          }}
        />
      </Menu>
      {tab === "Переводы" ? (
        <div>
          {transferId ? (
            <TransfersForm
              transferId={transferId}
              transferFormLabel={transferFormLabel}
              setTransfersId={setTransfersId}
            />
          ) : (
            <Transfers
              externalTransfers={externalTransfers}
              internalTransfers={internalTransfers}
              conversion={conversion}
              setTransfersId={setTransfersId}
              setTransferFormLabel={setTransferFormLabel}
            />
          )}
        </div>
      ) : (
        <TransferArchive />
      )}
    </div>
  );
};

export default TransferContainer;
