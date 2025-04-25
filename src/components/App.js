import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";

const mockPlants = [
  { id: 1, name: "Aloe", image: "./images/aloe.jpg", price: 15.99 },
  { id: 2, name: "ZZ Plant", image: "./images/zz-plant.jpg", price: 25.98 },
  { id: 3, name: "Pilea peperomioides", image: "./images/pilea.jpg", price: 5.99 },
  { id: 4, name: "Pothos", image: "./images/pothos.jpg", price: 12.11 },
  { id: 5, name: "Jade", image: "./images/jade.jpg", price: 10.37 },
  { id: 6, name: "Monstera Deliciosa", image: "./images/monstera.jpg", price: 25.99 },
  { id: 7, name: "Fiddle Leaf Fig", image: "./images/fiddle-leaf-fig.jpg", price: 55.0 },
];

function App() {
  const [plants, setPlants] = useState([]); // Ensure plants is initialized as an array

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://localhost:6001/plants");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
        setPlants(mockPlants); // Use mock data as fallback
      }
    };

    fetchPlants();
  }, []); // Ensure fetchPlants runs only once on mount

  return (
    <div>
      <header>
        <h1>
          Plantsy
          <span className="logo" role="img">
            🌱
          </span>
        </h1>
      </header>
      <main>
        <div className="new-plant-form">
          <h2>New Plant</h2>
          <form>
            <input name="name" placeholder="Plant name" type="text" />
            <input name="image" placeholder="Image URL" type="text" />
            <input name="price" placeholder="Price" step="0.01" type="number" />
            <button type="submit">Add Plant</button>
          </form>
        </div>
        <div className="searchbar">
          <label htmlFor="search">Search Plants:</label>
          <input id="search" placeholder="Type a name to search..." type="text" />
        </div>
        <ul className="cards">
          <PlantList plants={plants} />
        </ul>
      </main>
    </div>
  );
}

export default App;
