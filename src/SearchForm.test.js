
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchForm from './components/SearchForm';

// Test to check if the onSearch function is called with the correct data when the Search button is clicked
test('calls onSearch function with correct data when Search button is clicked', () => {
  // Mock the onSearch function using Jest's mock function
    const onSearchMock = jest.fn();
// Render the SearchForm component with the mocked onSearch function
    render(<SearchForm onSearch={onSearchMock} />);

    // Get references to the input, select, and button elements in the form
    const inputElement = screen.getByPlaceholderText(/Enter search term/i);
    const selectElement = screen.getByRole('combobox');
    const buttonElement = screen.getByRole('button', { name: /search/i });
  
    // Type 'harry potter' in the input field
    fireEvent.change(inputElement, { target: { value: 'harry potter' } });
  
    // Select 'all' in the dropdown
    fireEvent.change(selectElement, { target: { value: 'all' } });
  
    // Click the Search button
    fireEvent.click(buttonElement);
  
    // Check if the onSearch function is called with the correct data
    expect(onSearchMock).toHaveBeenCalledWith({ term: 'harry potter', mediaType: 'all' });
  });
 
 
  // Snapshot test for the SearchForm component
test('renders SearchForm correctly', () => {
  const { asFragment } = render(<SearchForm onSearch={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
  