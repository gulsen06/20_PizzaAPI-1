"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

//!  index.js

/*

   $ npm i express dotenv mongoose express-async-errors jsonwebtoken

*/

"use strict";

const express = require("express");
const app = express();

//  env Variables
require("dotenv").config();
const PORT = process.env.PORT || 8001;
const HOST = process.env.HOST || "127.0.0.1";

// DB CONNECTION
const { dbConnection } = require("./src/configs/dbConneciton");
dbConnection();

// MIDDLEWAREs

// Json
app.use(express.json());

// FIND-SERACH-SORT-PAGINATION
app.use(require("./src/middlawares/findSearchSortPage"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "welcome Pizza API Project",
  });
});

// ROUTEs

app.use("/users", require("./src/routes/user"));

// ERROR HANDLER
app.use(require("./src/middlawares/errorHandler"));

app.listen(
  PORT,
  console.log("SERVER IS RUNNING on http://" + HOST + ":" + PORT)
);
