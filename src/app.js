const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes');

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
