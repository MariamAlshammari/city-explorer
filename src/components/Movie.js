import React from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends React.Component{
                       render(){
                           return(
                               <>
                       <Card className="cc" border="dark" style={{ width: '18rem' , float: 'left' , padding: '10px' , margin: '10px' ,}}>
                            <Card.Img variant="top" src={this.props.poster_path} alt={this.props.title} />
                            <Card.Body >
                                <Card.Title  >Title: {this.props.title}</Card.Title>
                                <Card.Text  >
                                    Overview:  {this.props.overview}
                                </Card.Text>
                                <Card.Text  >
                                    Average votes: {this.props.vote_average}
                                </Card.Text>
                                Total votes:{this.props.vote_count}
                                <Card.Text   >
                                    Popularity: {this.props.popularity}
                                </Card.Text>
                                <Card.Text>
                                    Released on: {this.props.release_date}
                                </Card.Text   >
                               


                            </Card.Body>
                        </Card>
                        </>
                        )}}

export default Movie;