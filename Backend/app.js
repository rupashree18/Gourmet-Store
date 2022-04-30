const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

// Middlewares 
app.use(express.json());
app.use(cors());
app.use("/books",router);// localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:bB59cJ6OdUOoQtci@cluster0.trgwp.mongodb.net/store?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
      app.listen(5000);
    }).catch((err)=>console.log(err));

// bB59cJ6OdUOoQtci