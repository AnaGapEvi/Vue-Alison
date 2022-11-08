// const express = require('express');
// const port = process.env.PORT || 8080;
//
// const serveStatic = require("serve-static")
// const path = require('path');
//
// const app = express();
//
// app.use('/', serveStatic(path.join(__dirname, '/dist')));
// app.listen(port);
// console.log(`server started port: ${port}`);


const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);
app.use(history({  disableDotRule: true,  verbose: true}));
app.use(staticFileMiddleware);
app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});
const server = app.listen(process.env.PORT || 3000, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});

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
