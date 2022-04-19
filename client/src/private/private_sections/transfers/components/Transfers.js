import React from "react";
import { Icon } from "semantic-ui-react";

const Transfers = (props) => {
  return (
    <div className="transfers">
      <div className="externalTransfers">
        <div className="externalTransfersTitle">
          <h5>Внешние переводы</h5>
        </div>
        <div className="externalTransfersContent">
          {props.externalTransfers.map((el) => (
            <div
              key={el.id}
              onClick={() => {
                props.setTransferFormLabel(el.label);
                props.setTransfersId(el.id);
              }}
              className="externalTransfersBox"
            >
              <Icon size="big" color="blue" name={el.icon} />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="internalTransfers">
        <div className="internalTransfersTitle">
          <h5>Между своими счетами/картами</h5>
        </div>
        <div className="internalTransfersContent">
          {props.internalTransfers.map((el) => (
            <div
              key={el.id}
              className="internalTransfersBox"
              onClick={() => {
                props.setTransfersId(el.id);
                props.setTransferFormLabel(el.label);
              }}
            >
              <Icon size="big" color="blue" name={el.icon} />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="conversion">
        <div className="conversionTitle">
          <h5>Конвертизация</h5>
        </div>
        <div className="conversionContent">
          {props.conversion.map((el) => (
            <div
              key={el.id}
              onClick={() => {
                props.setTransfersId(el.id);
                props.setTransferFormLabel(el.label);
              }}
              className="conversionBox"
            >
              <Icon size="big" color="blue" name={el.icon} />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Transfers;
