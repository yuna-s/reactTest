import React from "react";

const person = (props) => {
  return (
    <div onClick={props.click}>
      <p>
        Im {props.name}. My age is {props.age}.
      </p>
    </div>
  );
};

export default person;
