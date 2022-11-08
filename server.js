const express = require('express');
const port = process.env.PORT || 8080;

const serveStatic = require("serve-static")
const path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, 'dist')));
app.listen(port);

//
// const express = require('express');
// const path = require('path');
//
// const port = process.env.PORT || 3000;
// const app = express();
//
// app.use(express.static(path.join(__dirname, 'dist')));
//
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`server started port: ${port}`);
//   }
// });
