const express = require('express');  
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
app.use(express.json());
const hospitalRouter = require('./router/router');

mongoose.connect("mongodb+srv://Abhinav:abhinav123@nodejsproject.pwxex.mongodb.net/hospitaldata?retryWrites=true&w=majority", async (err) => {
  if (err)
    throw err;
  console.log("Connected to MongoDB!");
});

app.use("/",hospitalRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})