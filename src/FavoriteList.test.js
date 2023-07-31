
import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteList from './components/FavoriteList';

// Test to check if the FavoritesList component renders with the correct number of items
test('renders FavoritesList component with correct number of items', () => {
  // Sample favorites data to be passed as props
  const favorites = [
    { trackId: 1, name: 'Favorite 1', artist: 'Artist 1', genre: 'Genre 1' },
    { trackId: 2, name: 'Favorite 2', artist: 'Artist 2', genre: 'Genre 2' },
  ];
// Render the FavoriteList component with the sample favorites data
  render(<FavoriteList favorites={favorites} onRemoveFromFavorites={() => {}} />);

  // Check if the correct number of favorites is displayed
  const itemElements = screen.getAllByRole('listitem');
  expect(itemElements).toHaveLength(favorites.length);
});
