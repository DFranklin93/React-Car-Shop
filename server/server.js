const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const car_shop = require("./routes/api/car_shop");

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Server.js working"));

app.use("/api/car_shop", car_shop);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
