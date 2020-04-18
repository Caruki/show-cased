const express = require('express');
const path = require('path');
require('dotenv').config();
const { connectDB } = require('./lib/database');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

connectDB()
  .then(async () => {
    console.log('Database is live ');

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) =>
    console.log('Oh no something went wrong. Server is down!' + error.status)
  );
