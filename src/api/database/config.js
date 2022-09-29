const mongoose = require("mongoose");

// connecting to mongoose database
mongoose.connect(
    "mongodb+srv://test:test@data.1rwxgri.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    (res) => console.log("connected to db")
);
