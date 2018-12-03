const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
// console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.emit('newMessage', generateMessage('Admin', 'Welcome To the Chat App'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joiined'));


    socket.on('createMessage', (message, callback) => {
        console.log('CreateMessage', message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback(); 

        // socket.broadcast.emit('newMessage',{
        //     form: message.form,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })
    });


    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});






server.listen(port, () => {
    console.log(`App is listening to ${port}`);
});
