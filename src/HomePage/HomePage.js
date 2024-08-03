import React, { useState } from "react";
import "./App.css";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./photos&Doc/img_2.jpg",
    "./photos&Doc/img_3.webp",
    "./photos&Doc/IMG4.jpg",
  ];

  const showImage = (index) => {
    setCurrentImageIndex(index);
  };

  const prevImage = () => {
    const newIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    showImage(newIndex);
  };

  const nextImage = () => {
    const newIndex =
      currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    showImage(newIndex);
  };

  return (
    <div>
      <header>
        <img
          src="./photos&Doc/Anna-University logo.png"
          alt="Anna University Logo"
          className="logo logo-left"
        />
        <h1>Centre for Entrepreneurship Development</h1>
        <h2>ANNA UNIVERSITY</h2>
        <img
          src="./photos&Doc/CED logo.jpeg"
          alt="CED Logo"
          className="logo logo-right"
        />
      </header>

      <nav>
        <ul>
          <li>
            <a href="/company-registration">Company Registration</a>
          </li>
          <li>
            <a href="/intellectual-property-rights">
              Intellectual Property Rights
            </a>
          </li>
        </ul>
      </nav>

      <div className="carousel">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Anna University Image ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
        <div className="carousel-buttons">
          <button onClick={prevImage}>&#10094;</button>
          <button onClick={nextImage}>&#10095;</button>
        </div>
      </div>

      <div className="about">
        <h3>About CED Department</h3>
        <p>
          The Centre for Entrepreneurship Development (CED) at Anna University
          focuses on fostering entrepreneurial skills and innovation among
          students and faculty. Our mission is to create a supportive
          environment for budding entrepreneurs to transform their ideas into
          successful businesses. We offer various programs, workshops, and
          mentorship opportunities to help individuals navigate the challenges
          of entrepreneurship.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
