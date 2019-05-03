var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.15.13');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', 'Testando mqtt e arduino');
console.log('Message Sent');
}, 5000);
});