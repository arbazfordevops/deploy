var express = require('express');
var app = express();

app.get('/', function (res, req) {
    res.send('{"response": "check this out"}');
});

app.get('/second', function (res, req) {
    res.send('{"response": "second one on the way"}');
});
app.listen(process.env.PORT || 3000);
module.exports = app;