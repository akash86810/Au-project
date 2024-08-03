import React from "react";
import "./styles.css";

const OPCRegistration = () => {
  return (
    <div className="container">
      <div className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#one-person-company">One Person Company (OPC)</a>
          </li>
          <li>
            <a href="#eligibilities">
              Eligibilities to Register a Person Company
            </a>
          </li>
          <li>
            <a href="#documents-needed">
              Needed Documents for One Person Company Registration
            </a>
          </li>
          <li>
            <a href="#procedure">Procedure to Register a Person Company</a>
          </li>
          <li>
            <a href="#advantages">
              Advantages of Registering Your Business as a Person Company
            </a>
          </li>
          <li>
            <a href="#disadvantages">
              Disadvantages of Registering Your Business as a Person Company
            </a>
          </li>
          <li>
            <a href="#relaxation">Relaxation Given by Government in 2021</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1 id="one-person-company">One Person Company (OPC)</h1>
        <p>
          If a Proprietor wants to change the entity type to a Private Limited
          company, the best suitable option is One Person Company which is
          shortly called OPC because this type of entity can be formed just with
          one shareholder and a Director. According to Section 2(62) of the
          Companies Act, a one-person company is a business entity that has only
          one individual as its member. This type of entity was introduced by
          the Union Government in the year of 2013 by way of amending the Indian
          Companies Act. Forming a one-person company involves fewer formalities
          than other types of companies. This is relatively hassle-free. It
          combines the features of a sole proprietor and a company.
        </p>

        <h2 id="eligibilities">Eligibilities to Register a Person Company:</h2>
        <ul>
          <li>One Shareholder</li>
          <li>One Director</li>
          <li>Office space should be in India</li>
          <li>One nominee</li>
          <li>One lakh minimum capital needed</li>
        </ul>

        <h2 id="documents-needed">
          Needed Documents for One Person Company Registration:
        </h2>
        <h3>Personal Documents</h3>
        <ul>
          <li>
            Address proof (such as Aadhar Card, Passport, Driving license, or
            other proofs given by the government)
          </li>
          <li>PAN Card</li>
          <li>Current Account statement</li>
          <li>Passport size photo</li>
        </ul>

        <h3>Office Documents</h3>
        <ul>
          <li>Name of the Firm</li>
          <li>Rental deed (if the office is rented)</li>
          <li>No Objection Certificate (NOC) (if the office is rented)</li>
          <li>Land document (if the office is owned)</li>
          <li>Bills (Electricity bill, Telephone bill, etc.)</li>
        </ul>

        <h2 id="procedure">Procedure to Register a One Person Company:</h2>
        <p>
          In India, OPC company registration is facilitated through the SPICe+
          (Simplified Proforma for Incorporating Company Electronically Plus)
          form, which has replaced the previous application forms for company
          incorporation.
        </p>
        <p>The OPC Registration process consists of two parts:</p>
        <p>
          Part A: This initial section of the SPICe+ form is dedicated to
          securing approval for the desired company name and applying for the
          Director Identification Number (DIN) or Permanent Account Number (PAN)
          for the proposed director.
        </p>
        <p>
          Part B: The subsequent segment, known as Part B, involves furnishing
          incorporation-related details. Here, essential information such as the
          registered office address of the OPC, details about share capital,
          particulars of the director, and information about the shareholder is
          provided.
        </p>
        <p>Here are the steps for an OPC registration online:</p>
        <ol>
          <li>
            <h4>Obtain a Digital Signature Certificate (DSC)</h4>
            <p>
              Secure a Digital Signature Certificate (DSC) for the intended
              director of the OPC. The DSC is utilized for electronically
              signing crucial documents.
            </p>
          </li>
          <li>
            <h4>Obtain Director Identification Number (DIN)</h4>
            <p>
              Acquire a Director Identification Number (DIN) for the proposed
              director from the Ministry of Corporate Affairs (MCA).
            </p>
          </li>
          <li>
            <h4>Name Reservation</h4>
            <p>
              Apply for name reservation through the MCA portal using Form
              SPICe+ (Part A). Ensure that the chosen name for your company is
              distinct and does not resemble any existing company or trademark.
            </p>
          </li>
          <li>
            <h4>Prepare MOA and AOA</h4>
            <p>
              Draft the Memorandum of Association (MOA) and Articles of
              Association (AOA) for your company. These documents define the
              company's objectives and internal rules.
            </p>
          </li>
          <li>
            <h4>File the Forms</h4>
            <p>
              File the necessary forms with the MCA to register One Person
              Company. Attach the relevant documents to the SPICe+ form,
              including MOA, AOA, declarations, proof of the registered office,
              nominee appointment, and other documents as required by the MCA.
            </p>
          </li>
          <li>
            <h4>Certificate of Incorporation</h4>
            <p>
              Upon approval by the ROC and verification of compliance
              requirements, the ROC will issue a Certificate of Incorporation,
              signifying the successful registration of your One Person Company.
              Notably, the PAN number (Permanent Account Number) and TAN (Tax
              Deduction and Collection Account Number) are generated
              automatically during the incorporation process, eliminating the
              need for separate applications.
            </p>
          </li>
        </ol>

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
          Advantages of Registering Your Business as a Person Company:
        </h2>
        <ul>
          <li>Protection on liability</li>
          <li>
            The continuous existence of the Firm (in case the owner of the firm
            passed away their descendants can run the company)
          </li>
          <li>Separate legal entity</li>
        </ul>

        <h2 id="disadvantages">
          Disadvantages of Registering Your Business as a Person Company:
        </h2>
        <ul>
          <li>
            This kind of firm can't register as a Non-Banking Financial Company
            (NBFC)
          </li>
          <li>The nominee must be Indian</li>
        </ul>

        <h2 id="relaxation">Relaxation Given by Government in 2021:</h2>
        <ul>
          <li>The minimum turnover will be 20 crores</li>
          <li>Maximum capital will be 2 crores</li>
          <li>Non-resident of India (NRI) can start a Company</li>
          <li>OPC can be changed into Private Limited within 2 to 3 months</li>
        </ul>
      </div>
    </div>
  );
};

export default OPCRegistration;
