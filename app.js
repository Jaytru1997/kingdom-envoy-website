require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const router = require("./routes/routes");
const { config } = require("./db/config");

const app = express();

//Serve Static Files
app.use("/public", express.static("public"));

//Template Engine
app.set("view engine", "ejs");

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// MIDDLEWARES
if (process.env.NODE_ENV === "development" || config.ENVIRONMENT === "local") {
  app.use(morgan("dev"));
}

// CORS Configuration
const allowedOrigins = [
  "http://localhost:8080",
  "http://127.0.0.1:5500",
  "https://keynigeria.org.ng",
  "https://www.keynigeria.org.ng",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.set("trust proxy", "127.0.0.1");

const expires = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "YHadz6yXTBqanjD$4rBm6q?zgmq5CaQ4MbAsN8qR",
    saveUninitialized: true,
    cookie: { maxAge: expires },
    resave: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("etag", false);
app.disable("view cache");

//Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data Sanitization against XSS
app.use(xss());

//Prevents parameter pollution
app.use(hpp()); //use white list to pass in duplicate query parameters

app.use(function (req, res, next) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", false);

  res.set(
    "Cache-control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  res.set("Surrogate-Control", "no-store");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  next();
});

// ROUTES
app.use(`/`, router);

module.exports = app;
