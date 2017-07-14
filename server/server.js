const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.send('index.html');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
