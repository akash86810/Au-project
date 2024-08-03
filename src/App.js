import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyRegistration from "./CompanyRegistrationPage/CompanyRegistration";
import IntellectualPropertyRights from "./IntellectualPropertyRightsPage/IntellectualPropertyRights";
import HomePage from "./HomePage/HomePage";
import ProprietorshipFirm from "./TypesofCompanyPAge/ProprietorshipFirm";
import PrivateLimitedCompany from "./TypesofCompanyPAge/PrivateLimitedCompany";
import PartnershipFirm from "./TypesofCompanyPAge/PartnershipFirm";
import OnePersonCompany from "./TypesofCompanyPAge/OnePersonCompany";
import PublicLimitedCompany from "./TypesofCompanyPAge/PublicLimitedCompany";
import LimitedLiabilityPartnership from "./TypesofCompanyPAge/LimitedLiabilityPartnership";
import CopyrightRegistration from "./Types_IP_RightsPage/CopyrightRegistration";
import DesignRegistration from "./Types_IP_RightsPage/DesignRegistration";
import PatentRegistration from "./Types_IP_RightsPage/PatentRegistration";
import TrademarkRegistration from "./Types_IP_RightsPage/TrademarkRegistration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/company-registration"
            element={<CompanyRegistration />}
          />
          <Route
            path="/company-registration/proprietorship-Firm"
            element={<ProprietorshipFirm />}
          />
          <Route
            path="/company-registration/PartnershipFirm"
            element={<PartnershipFirm />}
          />
          <Route
            path="/company-registration/PrivateLimitedCompany"
            element={<PrivateLimitedCompany />}
          />
          <Route
            path="/company-registration/OnePersonCompany"
            element={<OnePersonCompany />}
          />
          <Route
            path="/company-registration/PublicLimitedCompany"
            element={<PublicLimitedCompany />}
          />
          <Route
            path="/company-registration/LimitedLiabilityPartnership"
            element={<LimitedLiabilityPartnership />}
          />
          <Route
            path="/intellectual-property-rights"
            element={<IntellectualPropertyRights />}
          />
          <Route
            path="/intellectual-property-rights/CopyrightRegistration"
            element={<CopyrightRegistration />}
          />
          <Route
            path="/intellectual-property-rights/DesignRegistration"
            element={<DesignRegistration />}
          />
          <Route
            path="/intellectual-property-rights/PatentRegistration"
            element={<PatentRegistration />}
          />
          <Route
            path="/intellectual-property-rights/TrademarkRegistration"
            element={<TrademarkRegistration />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
