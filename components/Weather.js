import React from 'react';


 class Weather extends React.Component {
    render() {
        return (
            <div>
            <h2>{this.props.date}  </h2> 
            <h2> {this.props.description}</h2>  
            </div>
        )
    }
}

export default Weather