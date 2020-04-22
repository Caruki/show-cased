const express = require('express');
const path = require('path');
require('dotenv').config();
const { connectDB } = require('./lib/database');
const authRoute = require('./lib/routes/auth');
const listsRoute = require('./lib/routes/lists');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/api/users', authRoute);
app.use('/api/lists', listsRoute);

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
