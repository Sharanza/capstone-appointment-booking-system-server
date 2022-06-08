// requires the configurations made to .env to run the server
require("dotenv").config();

const express = require("express");
const app = express();
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// It manages relationships between data, provides schema validation,
// and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require("mongoose");

// Connects to MongoDB using string to db connection - domain / URL etc via .env file
mongoose.connect(process.env.DATABASE_URL);
// variable to hook up to events to run when db is connected to so that I know it's working
const db = mongoose.connection;
// on error event
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

// sets up server to accept .json
// app.use allows me to use any middleware when the server gets a request but before it gets to the routes
app.use(express.json());

// Routes
const bookedRoutes = require("./routes/bookedRoutes");
// tells express to use the availableRoutes
app.use("/bookedRoutes", bookedRoutes);

// listens to port 27017 and logs to console
app.listen(27017, () => console.log("Server started on port 27017"));
