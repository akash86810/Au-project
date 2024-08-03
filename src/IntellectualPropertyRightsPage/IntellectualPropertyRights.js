import React from "react";
import "./ipstyles.css";

const IntellectualPropertyRights = () => {
  const cards = [
    {
      imgSrc: "./photos&Doc/Trademark.jpeg",
      imgAlt: "Trademark Registration",
      link: "/intellectual-property-rights/TrademarkRegistration",
      text: "Trademark Registration",
    },
    {
      imgSrc: "./photos&Doc/Copyright.jpg",
      imgAlt: "Copyright Registration",
      link: "/intellectual-property-rights/CopyrightRegistration",
      text: "Copyright Registration",
    },
    {
      imgSrc: "./photos&Doc/Patent_Registration.webp",
      imgAlt: "Patent Registration",
      link: "/intellectual-property-rights/PatentRegistration",
      text: "Patent Registration",
    },
    {
      imgSrc: "./photos&Doc/design-registration.jpg",
      imgAlt: "Design Registration",
      link: "/intellectual-property-rights/DesignRegistration",
      text: "Design Registration",
    },
  ];

  return (
    <section id="ip">
      <h2>Intellectual Property Rights</h2>
      <hr />
      <p>
        Intellectual Property Rights (IPR) are legal rights that protect the
        creations of the mind. These rights provide creators with exclusive
        rights to their creations, thus encouraging innovation and creativity.
        The main types of IPR include trademarks, copyrights, patents and
        designs. Registering intellectual property rights is crucial for
        protecting and leveraging creative works and inventions. It ensures that
        creators can benefit from their work and maintain a competitive edge in
        the market.
      </p>
      <div className="card-container">
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

export default IntellectualPropertyRights;
