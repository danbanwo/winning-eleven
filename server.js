const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./back/models')


app.use(bodyparser.urlencoded({ extended: false, }));
app.use(bodyparser.json());
app.use(express.static('front/public'));


// route for users is not api
app.use('/api', require('./back/routes'));

app.get('/*', (req, res) => (
  res.sendFile(path.join(__dirname, '/front/views/index.html'))
));


db.sequelize.sync()
.then(() => (
  app.listen(3000, () => console.log('Server running on Port 3000'))
))

// module.exports = app
