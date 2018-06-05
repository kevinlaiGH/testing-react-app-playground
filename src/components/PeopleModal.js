import React from "react";
import {
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class PeopleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let { id, name, sportleader, description } = this.props.person;
    let { removePerson } = this.props;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=300"
            alt="Card image cap"
          />
          <CardTitle>{this.props.person.name}</CardTitle>
          <CardSubtitle>{this.props.person.sportleader}</CardSubtitle>
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>hello</ModalHeader>

          <ModalBody>Sayings!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PeopleModal;
