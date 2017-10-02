var React=require("react");
var Razmetka1=require("./Razmetka1");
var Razmetka2=require("./Razmetka2");

class Razmetka3 extends React.Component {
    render() {
       return (<div>
              <Razmetka1 />
              <Razmetka2 />
              </div>);
    }
  }

module.exports=Razmetka3;