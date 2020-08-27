import React from "react";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px",
    },
  };

  return (
    <div style={style}>
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
