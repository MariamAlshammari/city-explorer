import React from 'react';
import Table from 'react-bootstrap/Table';


 class Weather extends React.Component {
  
    render() {
      
        return (
            
            <div>
              
             
             <Table className="table table-bordered">
              <thead >
                <tr >

                  <th>Date </th>
                  <th>{this.props.date} </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <td>Description</td>
                  <td>{this.props.description}</td>
                  

                </tr>
              </tbody>
            </Table>
     
          
            </div>
        )
    }
}

export default Weather;