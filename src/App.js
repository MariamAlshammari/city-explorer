import React from 'react';
import axios from 'axios';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Weather from './components/Weather';
import Movies from './components/Movies';
import WeatherDay from './components/WeatherDay';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
// import components from './components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      locationQuery: '',
      showMap: false,
      alert: false,
      erroreMsg: '',
      accWeatherData: [],
      accMovieData: []
    }
  }

  getLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      locationQuery: event.target.cityName.value
    });
    //https://eu1.locationiq.com/v1/search.php?key=pk.1ff77471cda6f1204d9448309b9a7614&q=amman&format=json
    try {

      let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.locationQuery}&format=json`


      let resData = await axios.get(url);

      // let weatherRes = await axios.get(`http://localhost:3001/weather?locationQuery=${this.state.locationQuery}`)
      this.setState({
        cityData: resData.data[0],
        showMap: true,
        alert: false,
        // accWeatherData: weatherRes.data
      });

      this.getWeather();
      this.getMovies();
      // console.log(this.state.accWeatherData)
    } catch (err) {
      this.setState(
        {
          alert: true,
          erroreMsg: `${err.message}`
        })
      }

    };


    getWeather = async () => {
      
        let weatherRes = await axios.get(`http://localhost:3001/weather?locationQuery=${this.state.locationQuery}`)
        this.setState({

          accWeatherData: weatherRes.data
        });
        console.log(this.state.accWeatherData)
     

      };
      getMovies=async()=>{
        let movieRes=await axios.get(`http://localhost:3001/movies?locationQuery=${this.state.locationQuery}`)
        this.setState({
          accMovieData:movieRes.data
        });
        console.log(this.state.accMovieData)

      }
    




    //   this.setState({
    //     cityData: resData.data[0],
    //     showMap: true,
    //     alert: false
    //   });
    // }
    // catch(err){
    //   this.setState({
    //     erroreMsg:`${err.message}:Unable to geocode Please Enter Name`,
    //     alert: true
    //   })
    // }



  




  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        {/* <form onSubmit={this.getLocation} className="form-inline">
          <input type="text" name="cityName" placeholder='city name' />
          <input type="submit" value="Explore!" />
        </form> */}

        {/* <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p> */}
        {/* <p>{`City Name: ${this.state.cityData.display_name}lat is ${this.state.cityData.lat}lon is ${this.state.cityData.lon}`}</p> */}

        <Form className="form-inline" onSubmit={this.getLocation}>



          <input type="text" className="form-control" name="cityName" id="inputPassword2" placeholder="city name" />

          <button type="submit" className="btn btn-primary mb-2" value="Explore!">Explore!</button>
        </Form>

        {this.state.alert && <Alert variant={'warning'}>{this.state.erroreMsg}

        </Alert>


        }


        {this.state.showMap &&
          // <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} />


          <>


            <Table striped bordered hover className="table table-bordered">
              <thead className="thead-dark">
                <tr className="table-danger">

                  <th>City Name</th>
                  <th>Latitude </th>
                  <th>longitude</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <td>{this.state.cityData.display_name}</td>
                  <td>{this.state.cityData.lat}</td>
                  <td>{this.state.cityData.lon}</td>

                </tr>
                {/* <tr className="table-danger">...</tr> */}
              </tbody>
            </Table>

            <Figure className="figure">
              <Figure.Image
                // width={171}
                // height={180}
                alt=""
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`}
              />
              <Figure.Caption >
                City Name:{this.state.cityData.display_name}
              </Figure.Caption>
            </Figure>
          </>
          }
          <>
          
            
        {this.state.accWeatherData.map((weatherData, index) => {
          // <h2>Weather</h2>
          return (
            <div key={index}>
              
              <Weather description={weatherData.description} date={weatherData.date} />
              <CardDeck id='card'>
            <WeatherDay key={index}  date={weatherData.date} description={weatherData.description} />
            </CardDeck>
            </div>
          )
        })}
        
        </>
        <>

        {this.state.accMovieData &&
        <Movies movieData={this.state.accMovieData}/>
        }</>
        {/* 
{this.state.accWeatherData.length &&
        // map
          <Weather
            weth = {this.state.accWeatherData}
          />
        } */}

      </div>

    )
  }
}

export default App