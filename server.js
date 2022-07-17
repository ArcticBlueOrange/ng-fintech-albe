const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/app_vuota'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/ng-fintech-albe/index.html'));
});
app.listen(process.env.PORT || 8080);
