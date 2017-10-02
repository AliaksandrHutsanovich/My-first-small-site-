var React=require("react"); 

class Razmetka4 extends React.Component {

             constructor(props) {
                    super(props);
                    
                   }

             componentWillMount() {
                  console.log("beginning3");                          
                       }
            
             
             render() {
        return (<div><h1 className="r2">Cars</h1>
                <h1 className="r3">Motocircle</h1>
                <h1 className="r4">Trucks</h1>

                <table id="pos11">
                  <tbody>
                  <tr>
                    <td>
                      <a href="/carPage" id="pos15"></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table id="pos12">
                  <tbody>
                  <tr>
                    <td>
                      <a id="pos16" href="/motoPage"></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table id="pos13">
                  <tbody>
                  <tr>
                    <td>
                      <a id="pos17" href="/truckPage"></a>
                    </td>
                  </tr>
                  </tbody>
                </table></div>);
               }
            }

module.exports=Razmetka4;
