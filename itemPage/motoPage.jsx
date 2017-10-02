var socket = io.connect('http://localhost:3000');
socket.emit("event2", {my: "111"});
socket.on("event3", function(data) {

var React=require("react"); 

var Razmetka8=require("./components/Razmetka8");
var Razmetka9=require("./components/Razmetka9");
var motos=data.motos;

ReactDOM.render(
       <div>
         <Razmetka8 />
         <Razmetka9 motos={motos} />
       </div>,
       document.getElementById("container")
  )

});