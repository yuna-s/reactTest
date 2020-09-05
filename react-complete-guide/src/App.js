import React, { Component } from "react";
import Person from "./Person/FuncPerson";
import Radium, { StyleRoot } from "radium";
import styled from "styled-components";
import "./App.css";

//通常のCSSの書き方
const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  margin: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Yuna", age: 22 },
      { id: "ab", name: "Neko", age: 28 },
      { id: "ac", name: "Jiro", age: 10 },
    ],
    otherState: "some value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Tanjiro", age: 18 },
        { name: "Momonga", age: 20 },
        { name: "Baby", age: 2 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const presons = this.state.persons
    // 上記だとpointerを代入することになるので、現在のstateを元に更新する際には、コピーした方が良い
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // styled with json object
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "16px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "salmon",
        color: "black",
      },
    };

    // style[":hover"] = {
    //   backgroundColor: "white",
    //   color: "red",
    // };
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            // indexは要素が追加されると変化するので、personごとにidを持たせるのがいい
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }
    return (
      <StyleRoot>
        {/**use StyleRoot when we use @keyframes or @media */}
        <div className="App">
          <p className={classes.join(" ")}>This is really working</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.switchNameHandler.bind("Sakamoto")}
          >
            ChangeName
          </StyledButton>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);