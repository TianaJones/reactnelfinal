import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image12 from "../assets/image12.jpg"
import image13 from "../assets/image13.jpg"

// import image10 from "../assets/image10.jpg"
const Welcome = () => {
  const navigate = useNavigate();
  //   import './App.css';


  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const frontImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    // image10,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % frontImages.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleCurtainClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNextClick = () => {
    // Handle navigation to the other side
  };

  return (
    <div className="container">
      <div className={`curtain ${isOpen ? 'open' : ''}`} onClick={handleCurtainClick}>
        {isOpen ? (
          <>
            <div className="text">
              {/* Place your text here */}
            </div>
            <div className="sparkle"></div>
          </>
        ) : (
          <div className="front">
            {frontImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Front Image ${index + 1}`}
                style={{ display: index === currentImageIndex ? 'block' : 'none' }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="scrolling-images">

        {/* Place your scrolling images here */}
        {image10}
        {image11}
        {image12}
        {image13}
      </div>
      <p>
        {/* <button onClick={() => navigate("/Guest")}> Go to contact</button> */}
      </p>
      {/* <button className="next-button" onClick={handleNextClick}>Get started</button> */}
      <button onClick={() => navigate("/Guest")}> Get started </button>
    </div>
  );
};


{/* <p> */ }
{/* <button onClick={() => navigate("/Guest")}> Go to contact</button> */ }
{/* </p> */ }

export default Welcome;


