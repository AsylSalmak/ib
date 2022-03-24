import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../landing/Landing";
import PrivateSections from "../private/PrivateSections";
import Dashboard from "../private/private_sections/dashboard/components/Dashboard";
import Profile from "../private/private_sections/profile/components/Profile";
import Header from "../header/Header";
import Accounts from "../private/private_sections/accounts/components/Accounts";
import Payments from "../private/private_sections/payments/components/Payments";
import Transfers from "../private/private_sections/transfers/components/Transfers";
import Operations from "../private/private_sections/operations/components/Operations";
import Footer from "../Footer/Footer";
const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="private" element={<PrivateSections />}>
          <Route index element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="payments" element={<Payments />} />
          <Route path="operations" element={<Operations />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ApplicationRouter;
