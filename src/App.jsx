
import React, { useState } from "react";
import "./App.css";

const collections = [
  {
    name: "Active Edit",
    number: "03 - SPORT",
    title: "Active Edit",
    description: "Performance pieces that move with you. Find your own pace, your own style.",
    image: "boy.png",
    side: "left",
  },
  {
    name: "Evening Gown",
    number: "04 - EVENING",
    title: "Evening Gown",
    description: "Flowing elegance that turns every entrance into a moment.",
    image: "gown.png",
    side: "left",
  },
  {
    name: "Cozy Knitwear",
    number: "01 - WINTER",
    title: "Cozy Knitwear",
    description: "Soft, warm, and endlessly huggable. Comfort with character.",
    image: "jean.png",
    side: "right",
  },
  {
    name: "The White View",
    number: "02 - BRIDAL",
    title: "The White View",
    description: "A cascade of ivory and light. The moments you get to keep, reimagined.",
    image: "white.png",
    side: "left",
  },
  {
    name: "Street Layers",
    number: "05 - STYLE",
    title: "Street Layers",
    description: "Everyday fashion with a modern twist. Make your own statement.",
    image: "sandal.png",
    side: "right",
  },
];

function App() {
  const [active, setActive] = useState(0);

  const getPosition = (index) => {
    const position =
      (index - active + collections.length) % collections.length;

    if (position === 0) return "center";
    if (position === 1) return "right-one";
    if (position === 2) return "right-two";
    if (position === 3) return "left-two";
    return "left-one";
  };

  const current = collections[active];

  return (
    <div className="website">
      <header className="header">
        <h1>LUMIÈRE</h1>
        <span>THE ART OF FASHION</span>
      </header>

      <main className="fashion-stage">
        <div className="background-dots"></div>

        <div className="models-container">
          {collections.map((item, index) => (
            <div
              key={item.name}
              className={`model ${getPosition(index)}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.name}
                draggable="false"
              />
            </div>
          ))}
        </div>

        <div
          key={active}
          className={`description-card ${current.side}`}
        >
          <span className="card-number">{current.number}</span>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
          <div className="card-line"></div>
        </div>

        <div className="collection-navigation">
          {collections.map((item, index) => (
            <button
              key={item.name}
              className={active === index ? "selected" : ""}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="slide-count">
          0{active + 1} <span>/ 05</span>
        </div>
      </main>
    </div>
  );
}

export default App;
