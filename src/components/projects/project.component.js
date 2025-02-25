import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './project.styles.css'

export default function Projects() {
    return (
        <><h2 id="projects">My Projects</h2>
            <div className="card-container">
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Street Wear Fashion Website</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/street-wear-fashion-website">Github</Card.Link>
                        <Card.Link href=" https://shahadsidek.github.io/street-wear-fashion-website/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Portfolio Project</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS JS</ListGroup.Item>
                        <ListGroup.Item>React Bootstrap</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/my-portfolio">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/my-portfolio/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Book Club Website</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/BooksnMore-website">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/BooksnMore-website/">Website</Card.Link>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Music Rolodex</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Spotify API</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/music-rolodex">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/music-rolodex/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5589903/pexels-photo-5589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Monster Rolodex</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>REST API</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/monster-rolodex">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/monster-rolodex/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Landpage Design</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/landpage-design">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/landpage-design/">Website</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
