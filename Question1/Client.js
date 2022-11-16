// Get net module 
const net = require('net');

//Configuration ===================================
const port = 5000;
//=================================================

//================= Client 1 ==========================
//Create the socket client.
const client1 = new net.Socket();

//Connect to the server on the configured port 
client1.connect(port,function(){
	//Log when the connection is established
   console.log(`Client 1 :Connected to server on port ${port}`);
   
   //Try to send data to the server 
   client1.write('Hi from the client 1');

});
//Handle data coming from the server
client1.on('data',function(data){
   console.log(`Client 1 received from server : ${data}`);    
});
// Handle connection close 
client1.on('close',function(){
   console.log('Client 1 :Connection Closed');
});
//Handle error
client1.on('error',function(error){
   console.error(`Connection Error ${error}`); 
});

//================= Client 2 ==========================

//Create the socket client.
const client2 = new net.Socket();

//Connect to the server on the configured port 
client2.connect(port,function(){
	//Log when the connection is established
   console.log(`Client 2 : Connected to server on port ${port}`);
   
   //Try to send data to the server 
   client2.write('Hi from the client 2');

});
//Handle data coming from the server
client2.on('data',function(data){
   console.log(`Client 2 received from server : ${data}`);   
});
// Handle connection close 
client2.on('close',function(){
   console.log('Client 2 : Connection Closed');
});
//Handle error
client2.on('error',function(error){
   console.error(`Connection Error ${error}`); 
});