const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const postRoutes = require("./routes/routes")


mongoose.connect("mongodb+srv://shahbaz:root@cluster0.xnkbr.mongodb.net/keeper?retryWrites=true&w=majority", (err, resp) => {
    if (err) console.log("Database not connected", err)
    else console.log("Database connected successfully");
})


const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

app.use(cors());
// app.use(express.json());
app.use("/api", postRoutes)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});