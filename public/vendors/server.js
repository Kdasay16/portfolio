'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('*'));

app.get('/main', function(request, response) {
  response.sendFile('Portfolio/index.html', {root: '.'});
})
app.listen(PORT, Function() {
  console.log('Open mopen');
})
