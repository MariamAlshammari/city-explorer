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
                {/* <tr className="table-danger">...</tr> */}
              </tbody>
            </Table>
            {/* <h2>{this.props.date}  </h2> 
            <h2> {this.props.description}</h2>   */}
            </div>
        )
    }
}

export default Weather;