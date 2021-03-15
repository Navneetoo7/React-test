import React from 'react';
import {
  Card,CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const Course = ({course}) => {
return (
    <div>
    <Card>
      
      <CardBody>
        <CardTitle tag="h5">{course.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{course.subtitle}</CardSubtitle>
        <CardText >{course.text}</CardText>
        <Container>
        <Button outline color="danger">Delete</Button>
        <Button outline color='success ml-3 online'>Update</Button>
        </Container>
      </CardBody>
    </Card>
  </div>
);
}

export default Course;