import React from "react";
import Radium from "radium";

const person = (props) => {
  return (
    <div>
      <div onClick={props.click}>
        <p>
          Im {props.name}. My age is {props.age}.
        </p>
      </div>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </div>
  );
};

export default Radium(person);
