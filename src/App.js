import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cityData:{},
      locationQuery:'',
      showMap: false
    }
  }

  getLocation=async(event)=>{
    event.preventDefault();

    await this.setState({
      locationQuery:event.target.cityName.value
    })

    console.log('aaaaaaaaaaaaaa',this.state.locationQuery)

    let url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.locationQuery}&format=json`

    let resData=await axios.get(url);
    
    console.log(resData)
    console.log(resData.data)
    console.log(resData.data[0])

    this.setState({
      cityData: resData.data[0],
      showMap:true
    })
  
  
  
  }




  render(){
    return(
      <div>
            <h1>City Explorer</h1>
            <form onSubmit={this.getLocation}>
              <input type="text" name="cityName" placeholder='city name'/>
              <input type="submit" value="Explore!"/>
            </form>
            
            <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
            {/* <p>{`City Name: ${this.state.cityData.display_name}lat is ${this.state.cityData.lat}lon is ${this.state.cityData.lon}`}</p> */}
     
     
     
            {this.state.showMap && 
            <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} />
        }    
     
      </div>

    )
  }
}

export default App