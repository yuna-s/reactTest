import React from "react";
import Radium from "radium";
//import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;

  "@media (min-width:500px)": {
    width: "450px";
  }
`;

const person = (props) => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px",
    },
  };

  return (
    <StyleDiv>
      <div onClick={props.click}>
        <p>
          Im {props.name}. My age is {props.age}.
        </p>
      </div>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </StyleDiv>
  );
};

export default Radium(person);
