var React=require("react");

class Moto extends React.Component {
                  constructor(props) {
                         super(props);
                         this.state = {_id: "", title: "", photo: "", year: "", userName: "", phoneNum: "", dateAdd: ""};   
                   }
                  
                  render() {
                      return (<tr>
                               <td>{this.props._id}</td>
                               <td>{this.props.title}</td>
                               <td><img src={this.props.photo} width='80' height='80' />
                               </td><td>{this.props.year}</td><td>{this.props.userName}</td>
                               <td>{this.props.phoneNum}</td><td>{this.props.dateAdd}</td>
                               <td>
                                  <form action="/mainPage2" encType='multipart/form-data' method="post">
                                  <input type='hidden' name='id' value={this.props._id} />  
                                  <button className='pos27' name="button2">Delete</button>
                                  </form>
                               </td>
                              </tr>);
                  }
               }

module.exports=Moto;