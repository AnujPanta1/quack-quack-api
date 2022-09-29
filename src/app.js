const express = require("express");
const app = express();

// allowing cors
const cors = require("cors");
const corsOptions = {
    exposedHeaders: "auth-token",
};

app.use(cors(corsOptions));

// configuing environment variables
const dotenv = require("dotenv");
dotenv.config();

// config database
require("./api/database/config");

// Importing Routes
const routes = require("./api/routes");

// Basic Middle Wares
app.use(express.json());

// connecting route middle wares
app.use("/api", routes);

// catch all
app.get("/", (req, res) => {
    // Sending the response
    res.send("Running on Live");
    res.end();
});

// listening to port
app.listen(process.env.PORT || 8000, () =>
    console.log(`Running on port ${process.env.PORT}`)
);
