var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');
});


socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

var messageTextbox = jQuery('[name=message]');

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()

    }, function () {
        messageTextbox.val('')
    });
});

// var locationButton = jQuery('#send-location');
// locationButton.on('click', function () {
//     if (navigator.geolocation) {
//         return alert('Geolocation not supported by your browser');
//     }

//     navigator.geolocation.getCurrentPosition(
//         function(success) {
//             /* Location tracking code */
//         },
//         function(failure) {
//             if(failure.message.indexOf("Only secure origins are allowed") == 0) {
//                 alert('Only secure origins are allowed by your browser.');
//             }
        
//     });
// });
