import './App.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import 'antd/dist/reset.css';
import React, { useState } from 'react';
import FavoriteList from './components/FavoriteList';


// State to store search results and favorites
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const handleSearch = async ({ term, mediaType }) => {
    try {
      // Make the API call to my backend 
      const response = await fetch(`${apiUrl}/search`, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ term, mediaType }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)

      // Update the 'searchResults' state with the response from the backend
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state if needed
    }
  };

  const handleAddToFavorites = async (item) => {
    try {
      // Make the API call to add the item to favorites in the backend
      const response = await fetch(`${apiUrl}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the 'favorites' state in the frontend
      setFavorites([...favorites, item]);
    } catch (error) {
      console.error('Error adding to favorites:', error);
      // Handle error state if needed
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      // Make the API call to remove the item from favorites 
      const response = await fetch(`${apiUrl}/favorites/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the 'favorites' state in the frontend
      setFavorites(favorites.filter((item) => item.trackId !== id));
    } catch (error) {
      console.error('Error removing from favorites:', error);
      // Handle error state if needed
    }
  };

  return (
    <section>
      <h1 className ="header">iTunes Store Search</h1>
    <div className="components">
    
      <SearchForm onSearch={handleSearch} data-testid="search-form" />
      </div>
      <div className="components">
      <SearchResult results={searchResults} onAddToFavorites={handleAddToFavorites} data-testid="search-result"/>
      </div>
      <h2 className="header">Favorites</h2>
      <FavoriteList favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} />
    
    </section>
  );
};

export default App;




