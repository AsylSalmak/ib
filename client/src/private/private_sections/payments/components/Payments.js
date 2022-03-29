import React, { useEffect, useState } from "react";
import "../components/Payments.css";
import axios from "axios";
import Services from "./Services";
import Providers from "./Providers";
import PaymentForm from "./PaymentForm";

const Payments = () => {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [providers, setProviders] = useState([]);
  const [providerId, setProviderId] = useState("");
  
  useEffect(() => {
    axios({
      method: "get",
      url: "services",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setServices(response.data);
    });
  }, []);

  useEffect(() => {
    setProviderId('');
    axios({
      method: "get",
      url: "providers",
      params: {
        serviceId: serviceId,
      },
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setProviders(response.data);
    });
  }, [serviceId]);

  return (
    <div>
      <div className="PaymentCont">
        <Services
          services={services}
          setServiceId={setServiceId}
          serviceId={serviceId}
        />
      </div>
      {serviceId && <Providers serviceId={serviceId} providers={providers} setProviderId={setProviderId} providerId={providerId} />}

      {providerId && serviceId?<PaymentForm serviceId={serviceId}/>:null}
    </div>
  );
};
export default Payments;
