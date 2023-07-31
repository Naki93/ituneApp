// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Mocking the 'matchMedia' API for testing purposes
Object.defineProperty(window, 'matchMedia', {
    // Make the 'matchMedia' property writable to allow modifications
      writable: true,
        // Set the value of 'matchMedia' to a custom function that returns an object
        value: (query) => ({
         // In this mock, 'matches' is set to false, which means the media query doesn't match
   
        matches: false,
        // The 'media' property stores the media query string passed as an argument
        media: query,
        onchange: null,
        addListener: jest.fn(), // Mock the addListener method
        removeListener: jest.fn(), // Mock the removeListener method
      }),
    });
    