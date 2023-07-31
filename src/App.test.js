import React from "react"
import { render, screen } from '@testing-library/react';
import App from './App';




// Test to check if the header "iTunes Store Search" is rendered correctly
test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/iTunes Store Search/i);
  expect(headerElement).toBeInTheDocument();
});
// Test to check if the SearchForm and SearchResult components are rendered correctly
test('renders SearchForm and SearchResult components', () => {
  render(<App />);
  const searchFormElement = screen.getByTestId('search-form');
  const searchResultElement = screen.getByTestId('search-result');
  expect(searchFormElement).toBeInTheDocument();
  expect(searchResultElement).toBeInTheDocument();
});
// Test to check if the "Favorites" header is rendered correctly
test('renders "Favorites" header', () => {
  render(<App />);
  const favoritesHeaderElement = screen.getByText(/Favorites/i);
  expect(favoritesHeaderElement).toBeInTheDocument();
});

