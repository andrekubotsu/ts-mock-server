"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use('/', function (req, res) {
    res.status(200).send('Working!!!!');
});
app.listen(5000);
