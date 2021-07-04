import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg , CardSubtitle, Container } from 'reactstrap'

function InfoCard(props){
    console.log(props)
    return(
        <Container>
            <Card>
            <CardImg top width="100%" src={props.data.hdurl} alt="Card image cap" />
            <CardBody>
            <CardTitle>{props.data.title}</CardTitle>
            <CardSubtitle>{props.data.date}</CardSubtitle>
            <CardText>{props.data.explanation}</CardText>
        </CardBody>
      </Card>
    </Container>
    )
}

export default InfoCard;