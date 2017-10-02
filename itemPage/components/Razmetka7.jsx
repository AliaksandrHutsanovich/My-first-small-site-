

var React=require("react"); 

var Car=require("./Car");

function http() {
    return new Promise(function(resolve, reject) {
         var socket = io.connect('http://localhost:3000');
         socket.emit("event", {my: "111"});
         socket.on("event1", function(data) {
                 resolve(data);              
         });
    });
}


class Razmetka7 extends React.Component {
                       
                       
                       constructor(props) {
                         super(props);
                         this.state = {cars: (this.props.cars || [])};  
                         this.press = this.press.bind(this);
                                 
                   }

                        componentDidMount() {
                               http()
                                  .then(
                                     data=>{
                                          this.state.cars=data.cars;
                                          this.setState({
                                                cars: this.state.cars
                                           });
                                     }
                                  );                               
                        }                        
                                                             

                       press() {
                            class Razmetka8 extends React.Component {
                                render() {
                                     return (
                                          <form action="/carPage" encType='multipart/form-data' method="post">
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

                             
                           var cars = this.state.cars.map(function(car) {
                                 return <Car _id={car._id} title={car.text1} photo={car.file} year={car.text2} userName={car.text3} phoneNum={car.text4} dateAdd={car.time}></Car>;
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
                                              {cars}
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

module.exports=Razmetka7;
