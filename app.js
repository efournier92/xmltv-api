///////////////////////////////////
// DEPENDENCIES
//
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// API Routes
const routesApi = require("./app_api/routes/index");

///////////////////////////////////
// EXPRESS
//
const app = express();

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// app.use(favicon(__dirname + "/public/logo.png"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Resources
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "app_client")));

// Use API routes when path starts with /api
app.use("/api", routesApi);
// Else, render the index.html page for the Angular SPA
app.use( (req, res) => {
  res.sendFile(path.join(__dirname, "app_client", "index.html"));
});

///////////////////////////////////
// ERROR HANDLERS
//
// Forward 404 to Error Handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Unauthorised Errors
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// Dev Error Handler
if (app.get("env") === "production") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// Prod Error Handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

///////////////////////////////////
// SERVER
//
const port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port", port);

module.exports = app;

