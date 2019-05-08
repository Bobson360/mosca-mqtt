var mqtt = require('mqtt');
var client = mqtt.connect('mosca://192.168.15.15');
client.on('connect', function(){
    console.log('client connected');
    client.subscribe('chat');
    console.log('suscribed to chat')
});

client.on('message', function(topic, message){
      console.log('message received');
});

client.publish('myTopic', "JSON.stringify(m)");