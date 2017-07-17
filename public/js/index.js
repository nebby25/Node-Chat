   var socket = io();
    
socket.on('connect', function (){
            console.log('Connected to server');
});
            
//            socket.emit('createMessage', {
//               from: 'Benny',
//                text: 'Hey, this is Ben. Our names rhyme!'
//            });
//        
        
        socket.on('disconnect', function (){
           console.log('Disconnected from server'); 
        });

socket.on('newMessage', function(newMessage){
    console.log('New Message', newMessage);
});