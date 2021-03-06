import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCard from "./components/PeopleCard";
import PeopleModal from "./components/PeopleModal";
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
          sportleader: "Motivation Leader",
          description: "met at a StartCon Conf"
        },
        {
          id: 4,
          name: "John Chow",
          sportleader: "Dancing Leader",
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
    let peopleModals = this.state.people.map(person => {
      return (
        <Col sm="3">
          <PeopleModal
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <Container fluid>
        <Row>{peopleModals}</Row>
      </Container>
    );
  }
}

export default MainArea;
