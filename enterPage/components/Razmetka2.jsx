var React=require("react");

class Razmetka2 extends React.Component {
      constructor(props) {
        super(props);
        this.state={name: "", pass: ""};
        
        this.onChange1=this.onChange1.bind(this);
        this.onChange2=this.onChange2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }

      onChange1(e) {
        var val=e.target.value;
        this.setState({name: val});
      }

      onChange2(e) {
        var val=e.target.value;
        this.setState({pass: val});
      }

      handleSubmit(e) {
        e.preventDefault();
        
        
      }

      render() {
        return  (<div id="pos1">
                <h1>Log on to the website</h1>
                <form id="pos8" action="/enterPage" encType="multipart/form-data" method="post">
                   <p>User name  </p>
                   <div id="pos4"></div> 
                   <input id="pos2" type="text" size="20" name="name" value={this.state.name} onChange={this.onChange1}/>
                   <p>User password </p>
                   <div id="pos5"></div>
                   <input id="pos3" type="password" size="20" name="pass" value={this.state.pass} onChange={this.onChange2}/>
                   <div id="pos9"></div>
                   <button name="button1">Log on</button>
                </form>
                </div>);
       }
  }

module.exports=Razmetka2;