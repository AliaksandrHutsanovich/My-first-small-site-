var socket = io.connect('http://localhost:3000');
socket.emit("event", {my: "111"});
socket.on("event1", function(data) {


var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouterDOM=require('react-router-dom');


const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

var carPage=require("./carPage");
var motoPage=require("./motoPage");
var truckPage=require("./truckPage");



var cars=data.cars;
var p1=function(cars){return <carPage cars={cars} />;}
var p2=p1(cars);

ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/carPage" component={carPage} />
                <Route path="/motoPage" component={motoPage} />
                <Route path="/truckPage" component={truckPage} />
            </Switch>
        </Router>,
        document.getElementById("container")
    )

});