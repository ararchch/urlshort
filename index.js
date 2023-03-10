//importing packages
const express = require('express');
const app = express(); 
app.use(express.json());

//transferring to subdomains for get/post requests to firebase
app.use("/", require("./routes/redirectUser.js"));
app.use("/short", require("./routes/urlManager.js"));

//port adopts declared env variable value or defaults to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));