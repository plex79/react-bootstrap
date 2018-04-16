import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, qui?</p>
                    <Link to="/about">
                        <Button bsStyle="primary">Learn more</Button>
                    </Link>
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>Me</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic" />
                        <h3>Me2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic" />
                        <h3>Me3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;