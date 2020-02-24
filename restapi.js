// ライブラリ読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
