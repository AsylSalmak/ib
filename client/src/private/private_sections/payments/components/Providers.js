import React, { useEffect, useState } from "react";
import "../components/Payments.css";

const Providers = (props) => {
  return (
    <div className="ProviderCont">
      {props.providers.map((provider) => (
        <div key={provider.id} className={provider.id===props.providerId?"activeProviderBox":"providerBox"} onClick={() => {
          props.setProviderId(provider.id)
        }}>
          <h5>{provider.name}</h5>
        </div>
      ))}
    </div>
  );
};
export default Providers;
