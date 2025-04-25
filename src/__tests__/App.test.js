import { render, screen, act } from "@testing-library/react";
import App from "../components/App";

test("displays all plants on startup", async () => {
  await act(async () => {
    render(<App />);
  });

  const plantItems = await screen.findAllByTestId("plant-item");
  expect(plantItems).toHaveLength(7); // Adjust based on expected number of plants
});