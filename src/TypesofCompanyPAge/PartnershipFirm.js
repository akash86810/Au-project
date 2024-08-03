import React from "react";
import "./styles.css";

const PartnershipFirm = () => {
  return (
    <div className="container">
      <div className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#partnership-firm">Partnership Firm</a>
          </li>
          <li>
            <a href="#eligibilities">
              Eligibilities to Register a Partnership Firm
            </a>
          </li>
          <li>
            <a href="#documents-needed">
              Documents Needed for Partnership Firm Registration
            </a>
          </li>
          <li>
            <a href="#procedure">Procedure to Register a Partnership Firm</a>
          </li>
          <li>
            <a href="#pan-card">PAN Card</a>
          </li>
          <li>
            <a href="#advantages">
              Advantages of Registering Your Business as a Partnership Firm
            </a>
          </li>
          <li>
            <a href="#disadvantages">
              Disadvantages of Registering Your Business as a Partnership Firm
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1 id="partnership-firm">Partnership Firm</h1>
        <p>
          This entity type is the most popular and common type of business
          ownership in India. A partnership firm is a legal entity where two or
          more individuals join together to carry on a business for profit. The
          partnership firm in India is governed by the Indian Partnership Act,
          1932.
        </p>
        <h2 id="eligibilities">Eligibilities to Register a Partnership Firm</h2>
        <ul>
          <li>Two Partners</li>
          <li>The minimum sum of money as capital</li>
          <li>The object of the business</li>
        </ul>
        <h2 id="documents-needed">
          Documents Needed for Partnership Firm Registration
        </h2>
        <ul>
          <li>Name and address of the partners</li>
          <li>
            ID proof of the partners such as Aadhar card, Voter ID, Driving
            License, or government-approved documents
          </li>
          <li>Rental agreement or ownership document</li>
          <li>
            No Objection Certificate (NOC) certificate (if the land is rented)
          </li>
        </ul>
        <h2 id="procedure">Procedure to Register a Partnership Firm</h2>
        <h3>Step 1: Draft a Partnership Deed</h3>
        <p>
          A partnership deed is a legal agreement signed by partners with mutual
          understanding. It includes prime terms and conditions among the
          partners, asset and liability sharing percentage, etc. This agreement
          needs to be printed on Rs.300 stamp paper.
        </p>
        <p>
          <strong>Significant points to include in the agreement:</strong>
        </p>
        <ul>
          <li>Name and address of all the partners</li>
          <li>Name and location of the firm</li>
          <li>
            Purpose of the business (such as software, medicine, food, garments,
            etc.)
          </li>
          <li>Salary and asset percentage of the partners</li>
          <li>Liability responsibilities</li>
          <li>Date of commencement</li>
          <li>
            Standards for admission, retirement, and handling in case of
            partner's demise
          </li>
          <li>Managing partner or signing authority details</li>
        </ul>
        <p>
          <a href="../photos&Doc/Partnership-Deed.pdf">
            Sample partnership deed pdf
          </a>
        </p>
        <h3>Step 2: Submit the Details Online</h3>
        <p>
          Use the government's registration portal (
          <a
            href="https://tnreginet.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspector General of Registration - Tamil Nadu (tnreginet.gov.in)
          </a>
          ) to upload documents and details of the firm.
        </p>
        <ul>
          <li>Partners' photocopies of address and ID proofs</li>
          <li>Rental agreement if the office is rented</li>
          <li>No Objection Certificate (NOC) from the landlord</li>
          <li>Authorization letter</li>
        </ul>
        <p>
          <strong>Procedure to upload the details:</strong>
        </p>
        <ol>
          <li>Go to the above-mentioned portal and create a new account</li>
          <li>Fill up the Form-1 application form and submit</li>
          <li>Upload the required documents and sign the Form-1</li>
        </ol>
        <p>
          After submitting the documents, partners need to pay a fee of Rs.200
          in the Register of Firm portal. Print the acknowledgment of the
          payment.
        </p>
        <h3>Step 3: Register Before the Registrar of Firm</h3>
        <p>
          Complete the registration by submitting the documents manually to the
          Registrar of Firms. After verification, the Registrar will notify the
          firm's status and issue a Firm registration number via email. A firm
          registration certificate can be obtained within a day.
        </p>
        <h2 id="pan-card">PAN Card</h2>
        <p>
          <strong>Through Online:</strong>
        </p>
        <ol>
          <li>Visit "New PAN for Indian Citizen" (Form 49A)</li>
          <li>
            Fill in all details correctly, including the firm's business
            objectives
          </li>
          <li>
            Verify the details and proceed with payment through cheque, demand
            draft, credit card, debit card, or net banking
          </li>
        </ol>
        <p>
          <strong>Through Offline:</strong>
        </p>
        <ol>
          <li>
            Visit the tax information network facilitation center to obtain an
            offline form
          </li>
          <li>
            Fill the form with a black ballpoint pen, signed by the managing
            partner or using a rubber stamp if necessary
          </li>
          <li>Submit the form and pay the fee to proceed further</li>
        </ol>
        <h2 id="advantages">
          Advantages of Registering Your Business as a Partnership Firm
        </h2>
        <ul>
          <li>Easy to start or register</li>
          <li>
            Minimal legal compliance to run or maintain the partnership
            activities
          </li>
          <li>Sharing of capital contributions among members</li>
        </ul>
        <h2 id="disadvantages">
          Disadvantages of Registering Your Business as a Partnership Firm
        </h2>
        <ul>
          <li>No protection on liability</li>
          <li>Potential misunderstandings on sharing assets and liabilities</li>
          <li>Complexity in decision-making processes</li>
        </ul>
      </div>
    </div>
  );
};

export default PartnershipFirm;
