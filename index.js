const express = require("express");

// declaration
const app = express();
const PORT = 3344;

// listening server
app.listen(PORT, () => {
    console.log("my app is listening... " + PORT);
})