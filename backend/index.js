require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const rateLimit = require('express-rate-limit');



const app = express();
const port = process.env.PORT || 5000;
// Set NODE_ENV to 'production'
process.env.NODE_ENV = process.env.NODE_ENV || 'production';


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Set rate limit for requests from the same IP address
const limiter = rateLimit({
  windowMs:  60 * 1000, // 15 minutes
  max: 20, // 100 requests per windowMs
});

// Apply the rate limiter to all requests
app.use(limiter);

let favorites = [];

// Helper function to handle API requests
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const data = await response.json()
        throw new Error(`iTunes API error: ${data.errorMessage}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Endpoint to handle iTunes Search API requests
app.post('/api/search', async (req, res) => {
  const { term, mediaType } = req.body;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=${encodeURIComponent(mediaType)}`;
  try {
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from iTunes Search API.' });
  }
});

// Endpoint to handle favorite content
app.post('/api/favorites', (req, res) => {
  const { item } = req.body;
  favorites.push(item);
  res.sendStatus(200);
});

// app.delete('/api/favorites/:id', (req, res) => {
//   const id = req.params.id;
//   favorites = favorites.filter((item) => item.trackId !== id);
//   res.sendStatus(200);
// });
app.delete('/api/favorites/:id', (req, res) => {
    const { id} = req.params;
    const indexToRemove = favorites.filter((item) => item.trackId == id);
    //res.sendStatus(200);

    if (indexToRemove !== -1) {
      favorites.splice(indexToRemove, 1);
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Item not found in favorites.' });
    }
  });

  app.get('/', (req, res) => {
    res.sendStatus(200);
  });

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = { app, favorites, server }; // Exporting the favorites array along with the app


 
  
 
  
  
