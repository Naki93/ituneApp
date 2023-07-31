import React from 'react';
import { List, Button } from 'antd';
import 'antd/dist/reset.css';
import './FavoriteList.css'; // Custom CSS file for FavoritesList styles


const FavoriteList = ({ favorites, onRemoveFromFavorites }) => {
  // Function to handle removing an item from favorites
  const handleRemoveFromFavorites = (id) => {
    onRemoveFromFavorites(id);
  };

  return (
    // Ant Design List component to display favorites list
    <List
      dataSource={favorites}
      renderItem={(item) => (
        <List.Item>
          <div className="item-info">
        
            <h3>{item.artistName}</h3>
              <h4>{item.kind}</h4>
              <img src={item.artworkUrl100} alt={item.trackName} />
              <p>Name: {item.trackName} {item.collectionName}</p>
              
              <p>Genre: {item.primaryGenreName}</p>
              <p>Description: {item.longDescription} {item.description} {item.collectionName}</p>
              <p>Release Date: {item.releaseDate}</p>
              
           
          </div>
          <Button onClick={() => handleRemoveFromFavorites(item.trackId)}>Remove</Button>
        </List.Item>
      )}
    />
  );
};

export default FavoriteList;
