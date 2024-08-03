import React from "react";
import "./styles.css";

const PublicLimitedCompany = () => {
  return (
    <div className="container">
      <div className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#eligibilities">
              Eligibilities to Register a Public Limited Company
            </a>
          </li>
          <li>
            <a href="#documents">
              Needed Documents for Public Limited Company Registration
            </a>
          </li>
          <li>
            <a href="#procedure">
              Procedure to Register a Public Limited Company
            </a>
          </li>
          <li>
            <a href="#advantages">
              Advantages of Registering Your Business as a Public Limited
              Company
            </a>
          </li>
          <li>
            <a href="#disadvantages">
              Disadvantages of Registering Your Business as a Public Limited
              Company
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Public Limited Company</h1>
        <p>
          A suitable type of business entity for large-scale businesses where
          huge investment would be required. Because these types of companies
          can generate capital by way of inviting deposits from the public.
          These Companies can be listed or unlisted. To establish a Public
          Limited Company, a minimum of three Directors are required and there
          is no cap on the maximum number of members. Importantly, it has more
          strict regulatory requirements when compared to a Private Limited
          Company.
        </p>

        <h2 id="eligibilities">
          Eligibilities to Register a Public Limited Company:
        </h2>
        <ul>
          <li>7 Shareholders</li>
          <li>3 Directors</li>
          <li>Capital of 5 lakh</li>
        </ul>

        <h2 id="documents">
          Needed Documents for Public Limited Company Registration:
        </h2>
        <h3>Shareholders Documents</h3>
        <ul>
          <li>PAN Card (Directors and Shareholders)</li>
          <li>
            ID proof issued by the government such as Voter ID, Passport, or
            Driving License (Directors and Shareholders)
          </li>
          <li>Bills (such as telephone, electricity, gas, etc.)</li>
          <li>Passport size photo</li>
          <li>Current Bank Statement</li>
        </ul>

        <h3>Office Documents</h3>
        <ul>
          <li>
            No Objection Certificate (NOC is needed if it is a rental property)
          </li>
          <li>Rental deed</li>
          <li>Digital Signature Certificate (DSC of Directors)</li>
          <li>Director identification number (DIN of Directors)</li>
          <li>Memorandum Of Association (MOA)</li>
          <li>Article of Association (AOA)</li>
        </ul>

        <h2 id="procedure">Procedure to Register a Public Limited Company:</h2>
        <p>This type of Firm comes under the Registrars of Companies.</p>
        <ul>
          <li>Name Approval</li>
          <li>Disclose Directors and Shareholders</li>
          <li>Submit all the above-mentioned certificates</li>
        </ul>
        <p>
          After registering the company, we will get the PAN Card for our
          entity.
        </p>

        <p>
          Online Registration link:
          <br />
          <a
            href="https://www.mca.gov.in/content/mca/global/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministry of Corporate Affairs (MCA) Portal: MCA Services
          </a>
        </p>

        <h2 id="advantages">
          Advantages of Registering Your Business as a Public Limited Company:
        </h2>
        <ul>
          <li>Most suitable for large-scale companies</li>
          <li>Uninterrupted Existence</li>
          <li>Easy transfer of shares</li>
          <li>Eligibility for listing in the stock exchange</li>
        </ul>

        <h2 id="disadvantages">
          Disadvantages of Registering Your Business as a Public Limited
          Company:
        </h2>
        <ul>
          <li>Transparency of the company</li>
          <li>Difficulty in management</li>
          <li>Require high capital</li>
          <li>The problem in sharing assets and liability</li>
        </ul>
      </div>
    </div>
  );
};

export default PublicLimitedCompany;
