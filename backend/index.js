const express = require("express");

const app = express();

// Constants
const PORT = 5000;
const HOST = "localhost";

// Config JSON response
app.use(express.json());

// Routes
const apiRoutes = require("./routes/apiRoutes");

app.use("/api/coinstats", apiRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
