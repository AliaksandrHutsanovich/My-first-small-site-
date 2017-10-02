var ReactDOM = require('react-dom');
var React = require('react');
var Razmetka4=require("./components/Razmetka4");
var Razmetka5=require("./components/Razmetka5");

ReactDOM.render (
                    <div>
                       <Razmetka4 />
                       <Razmetka5 />
                    </div>,
                    document.getElementById("container")
                
            )