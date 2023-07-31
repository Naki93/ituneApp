## iTunes Store Search App
The iTunes Store Search App allows users to search for different types of media, such as movies, music, podcasts, and more, using the iTunes Search API. Users can also add their favorite media items to a favorites list.

https://search-app-hkc9.onrender.com/

### How to Use the App
Search for Media Content:

Enter a search term in the search input field.
Select the media type from the dropdown menu (e.g., movie, music, podcast, etc.).
Click the "Search" button or press Enter to initiate the search.
The search results will be displayed below the search form.

Add Items to Favorites:

After performing a search, the search results will be displayed in a list.
Click the "Add to Favorites" button next to an item in the search results to add it to the favorites list.

View Favorites List:

The "Favorites" section below the search results displays the list of favorite items.
Click the "Remove" button next to an item in the favorites list to remove it from the list.

### Getting Started
To run the application on your local machine, you don't need to clone the entire repository. Instead, you can directly use npm start to start the frontend and backend servers.

### Prerequisites
Ensure that you have the following software installed on your machine:

Node.js (version 14 or higher)
npm (Node.js package manager)
Installation
Install Backend Dependencies:

### Install backend dependencies (skip if already installed)
`npm install --prefix backend`
Install Frontend Dependencies:

### Install frontend dependencies (skip if already installed)
`npm install --prefix frontend`

### Running the App
Start the Backend Server:
### From the project root directory
`npm start --prefix backend`
The backend server will run on port 5000 by default. If you need to change the port, you can modify it in the index.js file inside the backend folder.

Start the Frontend Development Server:
### From the project root directory
`npm start --prefix frontend`
The frontend server will run on port 3000 by default. If you need to change the port, you can modify it in the package.json file inside the frontend folder.

Open your Web Browser:

Once both the backend and frontend servers are running, open your web browser and visit http://localhost:3000 to access the application.

### Testing
The application comes with automated tests to ensure its functionality. To run the tests, use the following commands:

### Run Backend Tests:
### From the project root directory
`npm test --prefix backend`
The tests use Jest and Supertest for testing the API endpoints.

### Run Frontend Tests:
### From the project root directory
`npm test --prefix frontend`
The tests use Jest and React Testing Library for testing the React components.

### Security Measures

### env Files
This app uses environment variables to manage sensitive information and configuration settings. The environment variables are stored in separate .env files for both the frontend and backend.

### Backend .env File
The backend .env file, located in the backend folder, contains configuration settings for the backend server, such as the server port and any API keys or secrets needed for external services.

For security reasons, the .env file is not included in the version control system (e.g., Git) to prevent sensitive information from being exposed publicly. Instead, it is added to the .gitignore file, so it won't be pushed to the repository.

You can create your own .env file in the backend folder and include the necessary environment variables for your app. Here's an example of how it might look:

makefile (.env)

PORT=5000
API_KEY=my_secret_api_key

### Frontend .env File
The frontend .env file, located in the frontend folder within my-search-app, contains configuration settings specific to the frontend, such as the API base URL.

Similar to the backend, the frontend .env file is also not included in version control to protect sensitive information.

Create your own .env file in the frontend folder and add the required environment variables. Here's an example:

REACT_APP_API_BASE_URL=http://localhost:5000/api
Using Environment Variables in the Code
To use the environment variables in the code, we utilize a package called dotenv. It allows us to load the variables from the .env files into the app's environment.

For the backend, we use dotenv in the index.js file to load the environment variables into the server. Here's an example of how it's done:

require('dotenv').config(); // Load environment variables from .env file

const port = process.env.PORT || 5000; // Use the PORT variable or fallback to 5000

// ... rest of the server setup ...

For the frontend, we use dotenv in the src/app.js file to load the environment variables into the React app. Here's an example:

require('dotenv').config(); // Load environment variables from .env file

const apiUrl = process.env.REACT_APP_API_BASE_URL; // Access the REACT_APP_API_BASE_URL variable

// ... rest of the React app setup ...

Error Handling:
Proper error handling is implemented to handle and log errors securely without revealing sensitive information to the end-users.

CORS and Helmet Middleware:

The backend server uses CORS middleware to restrict cross-origin requests.
The backend server uses Helmet middleware to set various HTTP headers, enhancing security.

### Contributing
Contributions to the iTunes Store Search App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Happy searching! 🎶🎬📚
