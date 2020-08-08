import React from "react";
import styled from "styled-components";

const Char = (props) => {
  const onClickHander = (charIndex) => {
    props.onClick(charIndex);
  };
  return <Frame onClick={() => onClickHander(props.index)}>{props.char}</Frame>;
};
const Frame = styled.div`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid black;
`;

export default Char;
