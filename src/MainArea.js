import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCard from "./components/PeopleCard";
class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "David Chow",
          sportleader: "Some sportleader, Inc",
          description: "met at a party, will hit u up later"
        },
        {
          name: "William Chow",
          sportleader: "Some sportleader, Inc",
          description: "met at a YOW Conference"
        },
        {
          name: "Tom Chow",
          company: "Some company, Inc",
          description: "met at a StartCon Conf"
        }
      ]
    };
  }
  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <PeopleCard person={person} />
        </Col>
      );
    });
    return (
      <Container fluid>
        <Row>{peopleCards}</Row>
      </Container>
    );
  }
}

export default MainArea;
