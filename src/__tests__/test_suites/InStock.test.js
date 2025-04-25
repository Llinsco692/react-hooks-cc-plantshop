import React from 'react';
import { render, fireEvent, within, waitFor } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('3rd Deliverable', () => {
  test('marks a plant as sold out', async () => {
    const { findAllByTestId } = render(<App />);
    global.setFetchResponse(global.basePlants);

    const plantItems = await findAllByTestId('plant-item');
    const firstPlantItem = plantItems[0];

    const inStockButton = within(firstPlantItem).getByText('In Stock');
    fireEvent.click(inStockButton);

    await waitFor(() => {
      expect(within(firstPlantItem).getByText('Out of Stock')).toBeInTheDocument();
    });
  });
})