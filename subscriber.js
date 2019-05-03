var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.15.13')
client.on('connect', function () {
    client.subscribe('myTopic2')
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
if(context == 'arduino020519'){
    msg1()
}else{
    msg2()
}
})

var msg1 = function(){
    console.log("arduino020519 -> publicando na API")
}
var msg2 = function(){
    console.log("esp8266020519 -> publicando na API")
}