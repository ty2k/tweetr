"use strict";

// Setup Express and MongoDB
const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connect to MongoDB
MongoClient.connect(MONGODB_URI, function (err, db) {
  // If there's a connection error, log it and throw error
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  // If connection is successful, log it
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  // The `data-helpers` module provides an interface to the database of tweets.
  // Because it exports a function that expects the `db` as a parameter, we can
  // require it and pass the `db` parameter immediately:
  const DataHelpers = require("./lib/data-helpers.js")(db);
  // The `tweets-routes` module works similarly: we pass it the `DataHelpers`
  // object so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);
});

// Persistent listener
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});