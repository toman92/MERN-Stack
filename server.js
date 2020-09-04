const express = require('express');

// imports connectDB function/method from db.js file in ./config folder
const connectDB = require('./config/db');

// node module that helps build paths no matter the system
const path = require('path');

const app = express();

// connect database
connectDB();

// Init Middleware
app.use(express.json());

// create API endpoints - URL where the server goes to get data on request
// you can name these whatever ya want, they are your own created API endpoints
// the require part pulls in the API file to be used to communicate with the database
// basically we access through /api/test and that calls the methods in ./routes/api/test.js
app.use('/api/test', require('./routes/api/test'))

// Serve static assets in production because we only have 1 port and want to server build files
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));