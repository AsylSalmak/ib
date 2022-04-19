import React, { useState } from "react";
import AccountSelect from "./AccountSelect";
import { Checkbox } from "semantic-ui-react";

const CardAccountform = (props) => {
  const [CheckboxCard, setCheckboxCard] = useState(true);

  return (
    <div className="CardAccountform">
      <div className="CardAccountformChekbox">
        <Checkbox
          checked={CheckboxCard}
          onChange={() => {
            setCheckboxCard(true);
          }}
          label="Выберите карту"
        />
        <Checkbox
          checked={!CheckboxCard}
          onChange={() => {
            setCheckboxCard(false);
          }}
          label="Выберите текущий счет"
        />
      </div>
      {CheckboxCard ? (
        <AccountSelect
          options={props.options1}
          setSelectedAccount={props.setSelectedAccount}
        />
      ) : (
        <AccountSelect
          options={props.options2}
          setSelectedAccount={props.setSelectedAccount}
        />
      )}
    </div>
  );
};
export default CardAccountform;
