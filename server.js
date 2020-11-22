const express = require('express');

// node module that helps build paths no matter the system
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json());

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
