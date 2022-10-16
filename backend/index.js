const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const ProductRoute = require("./routes/ProductRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ProductRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running ...");
});
