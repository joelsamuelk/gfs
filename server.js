const path = require("path");
const express = require("express");
const app = express();
app.get('/*', (req,res) => {
  res.sendFile(`dist/gfs-web-app/index.html`);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
