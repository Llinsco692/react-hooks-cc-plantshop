import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Default mock response
  })
);

global.setFetchResponse = (response) => {
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(response),
    })
  );
};

HTMLFormElement.prototype.submit = jest.fn();
