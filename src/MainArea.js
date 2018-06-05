import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCard from "./components/PeopleCard";
class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David Chow",
          sportleader: "Some sportleader, Inc",
          description: "met at a party, will hit u up later"
        },
        {
          id: 2,
          name: "William Chow",
          sportleader: "Some sportleader, Inc",
          description: "met at a YOW Conference"
        },
        {
          id: 3,
          name: "Tom Chow",
          company: "Some company, Inc",
          description: "met at a StartCon Conf"
        },
        {
          id: 4,
          name: "John Chow",
          company: "Some company, Inc",
          description: "met at a StartCon Conf"
        }
      ]
    };
  }

  removePerson(id) {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  }
  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="3">
          <PeopleCard
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
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
