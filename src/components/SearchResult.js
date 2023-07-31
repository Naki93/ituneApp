import React from 'react';
import { List, Button } from 'antd';
import 'antd/dist/reset.css';
import './SearchResult.css'; // Custom CSS file for SearchResult styles


const SearchResult = ({ results, onAddToFavorites }) => {
  // Function to handle adding an item to favorites
    const handleAddToFavorites = (item) => {
      onAddToFavorites(item);
    };
  
    return (
      // Ant Design List component to display search results
      <List data-testid="search-result"
        dataSource={results}
        renderItem={(item) => (
          <List.Item className= "container">
            <div className="item-info">
              <h3 className="moreInfo">{item.artistName}</h3>
              <h4 className="moreInfo">{item.kind}</h4>
              <img src={item.artworkUrl100} alt={item.trackName} className="moreInfo" />
              <p>Name: {item.trackName} {item.collectionName}</p>
              
              <p>Genre: {item.primaryGenreName}</p>
              <p>Description: {item.longDescription} {item.description} {item.collectionName}</p>
              <p>Release Date: {item.releaseDate}</p>
              
            </div>
            <Button onClick={() => handleAddToFavorites(item)}>Add to Favorites</Button>
          </List.Item>
        )}
      />
    );
  };
  
  export default SearchResult;
  
  