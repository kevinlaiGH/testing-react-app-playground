import React from "react";

class Example extends React.Component {
  render() {
    let names = ["Jake", "Jon", "Thruster"];
    let namesList = names.map(function(name) {
      return <li>{name}</li>;
    });
    return <ul>{namesList}</ul>;
  }
}

export default Example;
