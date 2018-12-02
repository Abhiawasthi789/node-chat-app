const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 4000;
// console.log(publicPath);
var app = express();
app.use(express.static(publicPath));


app.listen(port,()=>{
    console.log(`App is listening to ${port}`);
})