import React from "react";
import "./cmpstyles.css";

const CompanyRegistration = () => {
  const cards = [
    {
      imgSrc: "./photos&Doc/proprietorship_image.jpg",
      imgAlt: "Proprietorship Firm",
      link: "/company-registration/proprietorship-Firm",
      text: "Proprietorship Firm",
    },
    {
      imgSrc: "./photos&Doc/Partership pic.jpeg",
      imgAlt: "Partnership Firm",
      link: "/company-registration/PartnershipFirm",
      text: "Partnership Firm",
    },
    {
      imgSrc: "./photos&Doc/Private-Limited-Company.jpg",
      imgAlt: "Private Limited Company",
      link: "/company-registration/privatelimitedcompany",
      text: "Private Limited Company",
    },
    {
      imgSrc: "./photos&Doc/LLP.jpeg",
      imgAlt: "Limited Liability Partnership",
      link: "./company-registration/LimitedLiabilityPartnership",
      text: "Limited Liability Partnership",
    },
    {
      imgSrc: "./photos&Doc/OPC.jpeg",
      imgAlt: "One Person Company Private Limited",
      link: "./company-registration/OnePersonCompany",
      text: "One Person Company Private Limited",
    },
    {
      imgSrc: "./photos&Doc/public limited.jpeg",
      imgAlt: "Public Limited",
      link: "./company-registration/PublicLimitedCompany",
      text: "Public Limited Company",
    },
  ];

  return (
    <section id="registration">
      <h2>Company Registration</h2>
      <hr />
      <p>Choose the right business entity for your business.</p>
      <div className="card-containers">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.imgAlt} />
            <a href={card.link}>{card.text}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyRegistration;
