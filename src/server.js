const express = require('express');
const serveStatic = require('serve-static')
const path = require('path')

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listad na porta: ' + port)

const http = require('http')
const fs = require('fs')
const httpPort = 80

console.log('Listado na porta: ' + port)