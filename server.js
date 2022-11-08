const express = require('express');
const port = process.env.PORT || 8080;

// const serveStatic = require("serve-static")
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname + 'dist/static')))
app.get('/', express.static(path.join(__dirname, 'dist/static')));
// app.get('/', function (req, res) {
//   res.render(path.join(__dirname + '/dist/index.html'));
// });
app.listen(port);


// const express = require('express');
// const port = process.env.PORT || 8080;
//
// const serveStatic = require("serve-static")
// const path = require('path');`
//
// app = express();
//
// app.use(serveStatic(path.join(__dirname, 'dist')));
// app.listen(port);
