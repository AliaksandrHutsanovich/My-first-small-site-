

var React=require("react");
var ReactDOM = require('react-dom'); 

var Razmetka6=require("./components/Razmetka6");
var Razmetka7=require("./components/Razmetka7");

ReactDOM.render(
       <div>
         <Razmetka6 />
         <Razmetka7 />
       </div>,
       document.getElementById("container")
  )


