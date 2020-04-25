const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { connectDB } = require('./lib/database');
const authRoute = require('./lib/routes/auth');
const showsRoute = require('./lib/routes/shows');
const listsRoute = require('./lib/routes/lists');


const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', authRoute);
app.use('/api/shows', showsRoute);
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
