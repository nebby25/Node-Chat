const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New user connected');
    
    //socket.emit emits to single socket connection
//    socket.emit('newMessage', {
//        from: 'nebby25@hotmail.com', 
//        text: 'Hey! What up?', 
//        createdAt: new Date().getTime()   
//    });
    
    socket.on('createMessage', (message)=>{
       console.log('createMessage', message); 
        //io.emit emits to every socket connection
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()  
        });
    });
    
    socket.on('disconnect', (socket)=>{
   console.log('User disconnected'); 
    });
});


    
server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
  