import React from "react";

function PlantList({ plants }) {
  return (
    <ul>
      {plants.map((plant) => (
        <li key={plant.id} data-testid="plant-item">
          <h4>{plant.name}</h4>
          <img src={plant.image} alt={plant.name} />
          <p>${plant.price.toFixed(2)}</p> {/* Ensure price is formatted */}
        </li>
      ))}
    </ul>
  );
}

export default PlantList;
