module.exports=function() {
     var socket = io.connect('http://localhost:3000'); 
     socket.emit("event", {my: "111"});
     socket.on("event1", function(data) {
                            console.log(data.cars);
                            return data;});
};