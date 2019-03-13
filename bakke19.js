const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/billetter', function (req, res) {
  res.redirect('https://bakkefestivalen.hoopla.no/sales/3347855109');
});
app.get('/team2019', function (req, res) {
  res.redirect('https://docs.google.com/spreadsheets/d/1zfGpCkBMru_rdd8ustjVicYlPpvvQMpjrERCQ42owbw/edit#gid=634347005');
});

app.listen(port);
console.log('server on' + port);