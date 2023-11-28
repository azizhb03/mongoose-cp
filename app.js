// importing express module
const express = require("express");
// creating express instance
const app = express();
// injecting env variables
require("dotenv").config();
// importing mongoose module
const mongoose = require("mongoose");
// db connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.post("/create", require("./controller").createOne);
app.post("/create/many", require("./controller").createMany);
app.get("/find/:name", require("./controller").findByName);
app.get("/findbyfood/:favoriteFoods", require("./controller").findOne);
app.get("/findbyid/:id", require("./controller").findById);
app.put("/classicupdate/:id", require("./controller").findByIdAndUpdate);
app.put("/classup/:name", require("./controller").updateAgeByName);
app.delete("/deleteone/:id", require("./controller").findByIdAndRemove);
app.delete("/deletemany/:name", require("./controller").deleteMany);

// setting up routes

// setting up express app to listen on port 8080
app.listen(8080, () => console.log("Server is running on port 8080"));
