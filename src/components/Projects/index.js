import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import nasaImage from '../../assets/apps/nasa.jpg';
import passwordImage from '../../assets/apps/passwordgenerator.jpg';
import weatherImage from '../../assets/apps/weatherdashboard.jpg';
import cmsImage from '../../assets/apps/cms.jpg';
import noteTakerImage from '../../assets/apps/notetaker.jpg';
import techBlogImage from '../../assets/apps/techblog.jpg';

function Projects() {
    return (
        <Container>
            <h1 id="projects">Projects</h1>
            <p>Check out some of the recent projects I worked on in class: </p>
            <Row class="card-columns">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={nasaImage} />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            A new way to create secure, unique passwords.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/password-generator" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={passwordImage} />
                    <Card.Body>
                        <Card.Title>Daily NASA</Card.Title>
                        <Card.Text>
                            Your one-stop-shop for your favorite out-of-this-world NASA photos.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/daily-NASA" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={weatherImage} />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Text>
                            An app for querying local weather data to help you find the trip destination.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/weather-dashboard" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={noteTakerImage} />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Text>
                            An Express and Heroku app to keep your personal notes organized.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/note-taker" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cmsImage} />
                    <Card.Body>
                        <Card.Title>CMS Tracker</Card.Title>
                        <Card.Text>
                            CLI tool for keeping track of large teams.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/cms-tracker" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={techBlogImage} />
                    <Card.Body>
                        <Card.Title>Tech Blog</Card.Title>
                        <Card.Text>
                            A low frills version of YCombinator's Hacker News.
                        </Card.Text>
                        <a href="https://github.com/kwalexander/tech-blog" class="btn btn-primary btn-md active">GitHub Repo</a>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Projects;