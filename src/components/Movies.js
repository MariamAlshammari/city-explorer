import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class Movies extends React.Component {
    render() {


        return (



            this.props.movieData.map((val, index) => {
                return (
                    
                    <div key={index} >
                        
<Card className="cc" border="dark" style={{ width: '18rem' , float: 'left' , padding: '10px' , margin: '10px' ,}}>
                            <Card.Img variant="top" src={val.poster_path} alt={val.title} />
                            <Card.Body >
                                <Card.Title  >Title: {val.title}</Card.Title>
                                <Card.Text  >
                                    Overview:  {val.overview}
                                </Card.Text>
                                <Card.Text  >
                                    Average votes: {val.vote_average}
                                </Card.Text>
                                Total votes:{val.vote_count}
                                <Card.Text   >
                                    Popularity: {val.popularity}
                                </Card.Text>
                                <Card.Text>
                                    Released on: {val.release_date}
                                </Card.Text   >


                            </Card.Body>
                        </Card>


                      


                    </div>

                )
            }


            )
        )

    }
}

export default Movies;