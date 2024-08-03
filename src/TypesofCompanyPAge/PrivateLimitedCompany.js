import React from "react";
import "./styles.css";

const PrivateLimitedCompanyRegistration = () => {
  return (
    <div className="container">
      <div className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#eligibilities">
              Eligibilities to Register a Private Limited Firm
            </a>
          </li>
          <li>
            <a href="#documents">
              Needed Documents for Private Limited Firm Registration
            </a>
          </li>
          <li>
            <a href="#procedure">
              Procedure to Register a Private Limited Firm
            </a>
          </li>
          <li>
            <a href="#advantages">
              Advantages of Registering Your Business as a Private Limited Firm
            </a>
          </li>
          <li>
            <a href="#disadvantages">
              Disadvantages of Registering Your Business as a Private Limited
              Firm
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Private Limited Company</h1>
        <p>
          A private limited company, which is shortly termed Pvt Ltd, is a type
          of business entity most suitable for small businesses. In a private
          limited company, all business profits and liabilities belong to the
          company itself, and stakeholders may not be responsible for debts
          incurred by the company. The most important advantage of a Private
          Limited Company is Limited Liability.
        </p>
        <p>
          A Private Limited Company is a separate Legal Entity, which means a
          change of the director or the shareholder will not affect the
          existence of the company. These types of entities have the liberty to
          acquire foreign direct investments without any legal requirements.
          Furthermore, the transferability of shares by the shareholder to any
          third party is also restricted.
        </p>

        <h2 id="eligibilities">
          Eligibilities to Register a Private Limited Firm:
        </h2>
        <ul>
          <li>Two Shareholders</li>
          <li>Two Directors</li>
          <li>One Lakh of Share capital</li>
          <li>Office space in India</li>
        </ul>

        <h2 id="documents">
          Needed Documents for Private Limited Firm Registration:
        </h2>
        <h3>Partners Document</h3>
        <ul>
          <li>Replicate of PAN Card</li>
          <li>Passport (if Non-residential of India)</li>
          <li>
            ID proof issued by the government (such as Voter ID, Passport, or
            Driving License)
          </li>
          <li>
            Current Bank Statement Bills (such as telephone, electricity, gas,
            etc.)
          </li>
          <li>Passport size photo</li>
          <li>Signature of the Directors</li>
        </ul>

        <h3>Office Document</h3>
        <ul>
          <li>Replicate of Rent deed (must be in English)</li>
          <li>
            No Objection Certificate (NOC is needed if it is a rental property)
          </li>
          <li>The ownership document (if it is own property)</li>
          <li>Current Bank Statement of the Firm</li>
          <li>Bills (such as telephone, electricity, gas, etc.)</li>
        </ul>

        <h2 id="procedure">Procedure to Register a Private Limited Firm:</h2>
        <p>
          Company Registration Process, Registering a company in India involves
          a straightforward five-step company registration process:
        </p>
        <ol>
          <li>
            <h4>Digital Signature Certificate (DSC)</h4>{" "}
            <p>
              Acquire a Digital Signature Certificate (DSC) Every director and
              shareholder must secure a Digital Signature Certificate (DSC)
              issued by the Controller of Certification Agencies (CCA). This
              involves providing essential details such as passport-sized
              photos, PAN, Aadhaar Card, phone number, and email address.
              Foreign nationals should also furnish notarized and apostilled
              documents if applicable.
            </p>
          </li>
          <li>
            <h4>Director Identification Number (DIN)</h4>
            <p>
              Director Identification Number (DIN) Obtain a Director
              Identification Number (DIN) if you intend to be a director in the
              company. DIN is essential for directors and needs to be provided
              in the registration form.
            </p>
          </li>
          <li>
            <h4>Name Reservation for the Company</h4>
            <p>
              Begin by completing the form to secure a unique company name. This
              entails selecting the company type, class, category, and
              sub-category, specifying the primary division of industrial
              activity and offering a comprehensive business description. You'll
              need to propose two names for approval.
            </p>
          </li>
          <li>
            <h4>Submission of Company Details </h4>
            <p>
              Provide comprehensive information concerning capital, registered
              office address, subscriber and directors' details, stamp duty, PAN
              and TAN application, and necessary attachments.
            </p>
          </li>
          <li>
            <h4>
              Preparation and Submission of Incorporation Forms (MOA and AOA){" "}
            </h4>
            <p>
              Draft the Memorandum of Association (MOA) and Articles of
              Association (AOA) containing crucial company details. Obtain
              digital signatures from subscribers and professionals before
              submitting these documents to the MCA for approval. Additionally,
              file the AGILE-PRO-S form to register for GST, EPFO, ESIC, a bank
              account, and a shop and establishment license (which may be
              state-dependent).
            </p>
          </li>
        </ol>

        <h4>Certificate of Incorporation</h4>
        <p>
          Upon successful document verification, the MCA will issue the
          Certificate of Incorporation (COI) with the Company Identification
          Number (CIN), PAN, and TAN.
        </p>

        <p>
          Online Registration link:
          <br />
          <a
            href="https://www.mca.gov.in/content/mca/global/en/home.html"
            target="_blank"
          >
            Ministry of Corporate Affairs (MCA) Portal: MCA Services
          </a>
        </p>

        <h2 id="advantages">
          Advantages of Registering Your Business as a Private Limited Firm:
        </h2>
        <ul>
          <li>Limited Liability</li>
          <li>Tax Benefits</li>
          <li>Attracts Investors</li>
        </ul>

        <h2 id="disadvantages">
          Disadvantages of Registering Your Business as a Private Limited Firm:
        </h2>
        <ul>
          <li>Registration fee</li>
          <li>Many compliances needed</li>
          <li>Lack of Transparency</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivateLimitedCompanyRegistration;
