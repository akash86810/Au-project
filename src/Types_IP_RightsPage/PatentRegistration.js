import React from "react";
import "./styles.css";

const PatentRegistration = () => {
  return (
    <div className="container">
      <div className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#what-is-patent">Patent Registration</a>
          </li>
          <li>
            <a href="#types">Types of Patent Registration</a>
          </li>
          <li>
            <a href="#what-cannot-be-patented">What Cannot Be Patented?</a>
          </li>
          <li>
            <a href="#procedure">Procedure for Patent Registration</a>
          </li>
          <li>
            <a href="#advantages">Advantages of Patent Registration</a>
          </li>
          <li>
            <a href="#disadvantages">Disadvantages of Patent Registration</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Patent Registration</h1>

        <p id="what-is-patent">
          Patent registration is a right that is awarded to a person for a new
          invention or technology which had never existed before. Every nation’s
          growth rests on the number of significant patents granted. In legal
          language, patent registration is a set of special privileges approved
          by a person for his invention for a stipulated period of time.
        </p>

        <h2 id="types">Types of Patent Registration</h2>
        <ul>
          <li>Provisional Patent Application</li>
          <li>Regular / Ordinary Application for patent</li>
          <li>Convention Patent application</li>
          <li>PCT Application</li>
          <li>Patent of Addition</li>
          <li>Divisional Application</li>
        </ul>

        <h2 id="what-cannot-be-patented">What Cannot Be Patented?</h2>
        <ul>
          <li>Any idea which is frivolous or contrary to the natural laws</li>
          <li>
            Any invention which is related to Traditional Knowledge cannot be
            patented
          </li>
          <li>
            An Artistic work, Cinematographic Musical, or literary in Nature
            cannot be patented
          </li>
          <li>
            A mere mixture of two substances that result in mere aggregation of
            properties
          </li>
          <li>Mere Ideas cannot be patented</li>
          <li>Any process for the medicinal treatment or surgical process</li>
          <li>Any process relating to agriculture and horticulture</li>
          <li>Grants are not given for patents relating to atomic energy</li>
        </ul>

        <h2 id="procedure">Procedure for Patent Registration</h2>
        <ul>
          <li>Fill up the form with the correct details</li>
          <li>Pay the fee</li>
          <li>Draft</li>
          <li>Examination</li>
          <li>If there is no objection, the form moves to registration</li>
        </ul>

        <h2 id="advantages">Advantages of Patent Registration</h2>
        <ul>
          <li>
            Exclusive Rights: Grants the patent holder exclusive rights to use,
            sell, or license the invention for a specified period.
          </li>
          <li>
            Market Position: Provides a competitive edge by preventing others
            from using or selling the patented invention.
          </li>
          <li>
            Return on Investment: Potential to generate revenue through
            licensing or selling the patent.
          </li>
          <li>
            Legal Protection: Enables the patent holder to take legal action
            against infringers.
          </li>
          <li>
            Encourages Innovation: Offers recognition and potential financial
            rewards, encouraging further research and development.
          </li>
        </ul>

        <h2 id="disadvantages">Disadvantages of Patent Registration</h2>
        <ul>
          <li>
            Cost: Involves significant expenses for filing, legal fees, and
            maintenance.
          </li>
          <li>
            Time-Consuming: The process can take several years to complete.
          </li>
          <li>
            Disclosure Requirement: Requires public disclosure of the invention,
            which can be accessed by competitors.
          </li>
          <li>
            Limited Duration: Protection is only for a limited period (typically
            20 years from the filing date).
          </li>
          <li>
            Complexity: The application process is complex and often requires
            professional legal assistance.
          </li>
          <li>
            Enforcement: Monitoring for infringement and taking legal action can
            be challenging and costly.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatentRegistration;
