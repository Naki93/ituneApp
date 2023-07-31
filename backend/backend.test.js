
const request = require('supertest');
const { app, favorites, server } = require('./index');

describe('Test Express API Endpoints', () => {
  beforeEach(() => {
    // Clear the favorites array before each test
    favorites.length = 0;
  });

  test('GET / should return 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('POST /api/search should return data from iTunes Search API', async () => {
    const response = await request(app)
      .post('/api/search')
      .send({ term: 'harry potter', mediaType: 'movie' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('resultCount');
    expect(response.body).toHaveProperty('results');
  });

  test('POST /api/favorites should add an item to favorites', async () => {
    const newItem = {
      trackId: 123456,
      trackName: 'Example Track',
      artistName: 'Example Artist',
    };

    const response = await request(app)
      .post('/api/favorites')
      .send({ item: newItem });

    expect(response.statusCode).toBe(200);
    expect(favorites).toContainEqual(newItem);
  });

  test('DELETE /api/favorites/:id should remove an item from favorites', async () => {
    // Add an item to favorites first for the test
    const newItem = {
      trackId: 123456,
      trackName: 'Example Track',
      artistName: 'Example Artist',
    };
    favorites.push(newItem);

    const response = await request(app).delete(`/api/favorites/${newItem.trackId}`);

    expect(response.statusCode).toBe(200); // Expecting 200 for successful deletion
    expect(favorites.some((item) => item.trackId === newItem.trackId)).toBe(false); // Expecting false since the item should be removed
    
    
  });

});

afterAll((done) => {
  // Close the Express server after all tests have completed
  server.close(done);
});





