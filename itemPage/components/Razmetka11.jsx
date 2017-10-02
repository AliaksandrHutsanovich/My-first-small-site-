
var React=require("react"); 

var Truck=require("./Truck");

class Razmetka11 extends React.Component {
                       
                       
                       constructor(props) {
                         super(props);
                         this.state = {trucks: (this.props.trucks || [])};  
                         this.press = this.press.bind(this);
                   }

                       

                       

                       press(){
                            class Razmetka8 extends React.Component {
                                render() {
                                     return (
                                          <form action="/truckPage" encType='multipart/form-data' method="post">
                                             <input type='hidden' name='id' value='0' />
                                             <p>Input title:</p>
                                             <input type='text' name='text1' size='20' />
                                             <p>Load photo:</p>
                                             <input type='file' name='file' accept='image/jpeg,image/png,image/gif' />
                                             <p>Input year of producing</p>
                                             <input type='text' name='text2' size='20' />
                                             <p>Input your name:</p>
                                             <input type='text' name='text3' size='20' />
                                             <p>Input your phon number:</p>
                                             <input type='text' name='text4' size='20' />
                                             <input type='hidden' name='time' /><p></p>
                                             <button id='pos26' name='button3'>Add</button>
                                           </form>
                                            );
                                }}
                                ReactDOM.render(
                                    <div>
                                       <Razmetka8 />
                                    </div>,
                                   document.getElementById("container1")
                                )
                            
                       }

                       render() {

                            
                           
                             
                           var trucks = this.state.trucks.map(function(truck) {
                                 return <Truck _id={truck._id} title={truck.text1} photo={truck.file} year={truck.text2} userName={truck.text3} phoneNum={truck.text4} dateAdd={truck.time}></Truck>;
                                 });
                           
                           return (<table id="pos23">
                                    <tbody>
                                     <tr>
                                       <td className="r5" id="container1"></td>
                                     </tr>
                                     <tr>
                                       <td className="r6">
                                          <table>
                                            <thead>
                                              <tr>
                                               <th><p>Id</p></th>
                                               <th><p>Title</p></th>
                                               <th><p>Photo</p></th>
                                               <th><p>Year of  producing</p></th>
                                               <th><p>Owner's name</p></th>
                                               <th><p>Phone number</p></th>
                                               <th><p>Dateof registration</p></th>
                                               <th></th>
                                              </tr>
                                             </thead>
                                             <tbody>
                                              {trucks}
                                              <tr>
                                                <td><button id="pos26" name="button2" onClick={this.press}>Add new</button></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                       </td>
                                     </tr>
                                    </tbody>
                                   </table>);    
                           }
                   }

module.exports=Razmetka11;