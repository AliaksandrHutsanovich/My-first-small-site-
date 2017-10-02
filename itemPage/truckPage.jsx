var socket = io.connect('http://localhost:3000');
socket.emit("event4", {my: "111"});
socket.on("event5", function(data) {

var React=require("react"); 
var ReactDOM = require('react-dom');

var Razmetka10=require("./components/Razmetka10");
var Razmetka11=require("./components/Razmetka11");
var trucks=data.trucks;

ReactDOM.render(
       <div>
         <Razmetka10 />
         <Razmetka11 trucks={trucks} />
       </div>,
       document.getElementById("container")
  )

});