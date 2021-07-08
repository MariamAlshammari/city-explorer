
import React from 'react'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

export class WeatherDay extends React.Component {
    render() {
        return (
            <div>

                <Card class='style' style={{ width: '15rem' }} border="dark"  text='dark'>
                    <ListGroup variant="flush"  >
                        <Card.Title>{this.props.date}</Card.Title>

                        <Card.Body>

                            <ListGroup.Item><Card.Text>
                                Description : {this.props.description}
                            </Card.Text></ListGroup.Item>

                        </Card.Body>
                    </ListGroup>
                </Card>

            </div>
        )
    }
}

export default WeatherDay
