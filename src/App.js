import React,{ useState } from 'react';
import './App.css';
import bg1 from './img/img1.png';
import bg2 from './img/us.png';
import bg3 from './img/img4.png';


function Navbarcom() {
  const [activeDot, setActiveDot] = useState(0);
  const [rotation, setRotation] = useState(0);

  const dots = [
    {
      title: "The American Revolution",
      description: "The American colonies’ fight for independence from Britain in the late 18th century was a landmark event in world history.",
      description1:"It resulted in the establishment of the United States of America and the spread of Enlightenment ideals.",
      backgroundImage: bg1,    
    },
    {
      title: "The Industrial Revolution",
      description: "The Industrial Revolution transformed economies from agrarian-based systems to industrial powerhouses, beginning in Britain.",
      description1:"With the introduction of machinery, such as the steam engine, production methods became faster and more efficient.",
      backgroundImage: bg2,    
    },
    {
      title: "Cotton",
      description: "Before the world embraced cotton, most civilizations wore animal skins to keep warm.",
      description1:"Indians discovered cotton in the 5th and 4th millennium BCE. They started cultivating this precious crop during the Indus Valley Civilization.",
      backgroundImage: bg3,    
    },
    {
      title: "The American Revolution",
      description: "The American colonies’ fight for independence from Britain in the late 18th century was a landmark event in world history.",
      description1:"It resulted in the establishment of the United States of America and the spread of Enlightenment ideals.",
      backgroundImage: bg1,
    },
    {
      title: "The Industrial Revolution",
      description: "The Industrial Revolution transformed economies from agrarian-based systems to industrial powerhouses, beginning in Britain.",
      description1:"With the introduction of machinery, such as the steam engine, production methods became faster and more efficient.",
      backgroundImage: bg2, 
    },
    {
      title: "Cotton",
      description: "Before the world embraced cotton, most civilizations wore animal skins to keep warm.",
      description1:"Indians discovered cotton in the 5th and 4th millennium BCE. They started cultivating this precious crop during the Indus Valley Civilization.",
      backgroundImage: bg3,
    },
    {
      title: "The Industrial Revolution",
      description: "The Industrial Revolution transformed economies from agrarian-based systems to industrial powerhouses, beginning in Britain.",
      description1:"With the introduction of machinery, such as the steam engine, production methods became faster and more efficient.",
      backgroundImage: bg2,
    },
  ];

  const handleClick = (index) => {
    const anglePerDot = 360 / dots.length;
    const newRotation = -(index * anglePerDot);
    setRotation(newRotation);
    setActiveDot(index);
  };
  const openMapLocation = (location) => {
    const encodedLocation = encodeURIComponent(location); // Encode the location for the URL
    const mapUrl = `https://www.google.com/maps?q=${encodedLocation}`;
    window.open(mapUrl, "_blank"); // Open in a new tab
  };
 

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TIMELINE</div>
      </nav>

      {/* Main Content */}
      <div className="main"
        style={{
          backgroundImage: `url(${dots[activeDot].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay"></div>
        <div className="circle-container">
          <div
            className="circle"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {dots.map((dot, index) => (
              <div
                key={index}
                className={`dot ${activeDot === index ? "active" : ""}`}
                style={{
                  transform: `rotate(${index * (360 / dots.length)}deg) translate(150px) rotate(-${index * (360 / dots.length)}deg)`,
                }}
                onClick={() => handleClick(index)}
              />
                
            ))}
          </div>
        </div>
        <div className="content">
          <h3>{dots[activeDot].title}</h3>
          <p>{dots[activeDot].description}</p>
          <p>{dots[activeDot].description}</p>
          <button onClick={() => openMapLocation(dots[activeDot].location)}>
            ViewMap
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Navbarcom

