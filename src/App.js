import { useState } from "react";
import "./styles.css";

export default function App() {
  const [lowerPrice, setLowerPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(1000);

  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100
    },
    {
      id: 2,
      item: "jacket",
      price: 400
    },
    {
      id: 3,
      item: "hat",
      price: 50
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250
    },
    {
      id: 5,
      item: "gloves",
      price: 300
    }
  ];

  return (
    <div className="App">
      <input
        type="number"
        value={lowerPrice}
        onChange={(e) => setLowerPrice(e.target.value)}
      />
      <input
        type="number"
        value={upperPrice}
        onChange={(e) => setUpperPrice(e.target.value)}
      />
      {data
        .filter((item) => lowerPrice <= item.price && item.price <= upperPrice)
        .map((filteredItem, index) => (
          <div key={index}>
            <p>
              {filteredItem.item} - {filteredItem.price}
            </p>
          </div>
        ))}
    </div>
  );
}
