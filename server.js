const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes1');
const html = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8989;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

app.use('/api', api);
app.use('/', html);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});