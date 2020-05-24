const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes

// Creating Routes
// require("./routes/api")(app);
// require("./routes/html")(app);
app.use(require("./routes/api"));
app.use(require("./routes/html"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
