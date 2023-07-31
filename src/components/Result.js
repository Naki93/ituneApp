import React from 'react';
import { Card, Button } from 'antd';
import 'antd/dist/reset.css';
import './ResultItem.css'; 

const ResultItem = ({ item, onAddToFavorites }) => {
   // Function to handle adding an item to favorites
  const handleAddToFavorites = () => {
    onAddToFavorites(item);
  };

  return (
    // Ant Design Card component to display item details
    <Card
      title={item.artistName}
      cover={<img alt={item.trackName} src={item.artworkUrl100} style={{ width: '100px' }} />}
    >
      
              <p>Name: {item.trackName} {item.collectionName}</p>
              
              <p>Genre: {item.primaryGenreName}</p>
              <p>Description: {item.longDescription} {item.description} {item.collectionName}</p>
              <p>Release Date: {item.releaseDate}</p>
      <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
    </Card>
  );
};

export default ResultItem;
