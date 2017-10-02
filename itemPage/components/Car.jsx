var React=require("react"); 

class Car extends React.Component {
                  constructor(props) {
                         super(props);
                         this.state = {_id: "", title: "", photo: "", year: "", userName: "", phoneNum: "", dateAdd: ""};   
                        
                   }

                   
                  
                  render() {
                      var id1=this.props._id;
                     
                      return (<tr data-rowid={this.props._id}>
                               
                               <td>{this.props._id}</td>
                               <td>{this.props.title}</td>
                               <td><img src={this.props.photo} width='80' height='80' /></td>
                               <td>{this.props.year}</td>
                               <td>{this.props.userName}</td>
                               <td>{this.props.phoneNum}</td>
                               <td>{this.props.dateAdd}</td>
                               <td>
                                  <form action="/mainPage1" encType='multipart/form-data' method="post">
                                  <input type='hidden' name='id' value={this.props._id} />  
                                  <button className='pos27' name="button2">Delete</button>
                                  </form>
                               </td>
                            
                              </tr>);
                  }
               }

module.exports=Car;
