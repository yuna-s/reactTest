import React, { Component } from "react";
import Person from "./Person/FuncPerson";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Yuna", age: 22 },
      { name: "Neko", age: 28 },
      { name: "Jiro", age: 10 },
    ],
    otherState: "some value",
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

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind("Sakamoto")} />
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      </div>
    );
  }
}

export default App;
