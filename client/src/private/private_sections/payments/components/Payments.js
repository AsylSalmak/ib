import React, { useEffect, useState } from "react";
import "../components/Payments.css";
import axios from "axios";
import Services from "./Services";
import Providers from "./Providers";
import PaymentForm from "./PaymentForm";
import { API_URL } from "../../../../config";

const Payments = () => {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [providers, setProviders] = useState([]);
  const [providerId, setProviderId] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: "services",
      baseURL: API_URL,
    }).then((response) => {
      setServices(response.data);
    });
  }, []);

  useEffect(() => {
    setProviderId("");
    axios({
      method: "get",
      url: "providers",
      params: {
        serviceId: serviceId,
      },
      baseURL: API_URL,
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
      {serviceId && (
        <Providers
          serviceId={serviceId}
          providers={providers}
          setProviderId={setProviderId}
          providerId={providerId}
        />
      )}

      {providerId && serviceId ? (
        <PaymentForm
          setServiceId={setServiceId}
          serviceId={serviceId}
          providerId={providerId}
        />
      ) : null}
    </div>
  );
};
export default Payments;
