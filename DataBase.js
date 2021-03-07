const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const env=require("dotenv").config();
const fs = require("fs");
const username=process.env.username;
const password=process.env.password;
// const { username, password } = require("./config.json");

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "smoggy-monkey-1158",
  port: 26257,
  dialectOptions: {
    ssl: {
      //   rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
    },
  },
  logging: false,
});