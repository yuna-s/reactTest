import React from "react";

const Validation = (props) => {
  let result = "";
  const txtLength = props.txt.length;
  if (txtLength < 5) {
    result = "Text too short";
  } else result = "Text long enough";

  return (
    <div>
      <p>{result + ":" + props.txt}</p>
    </div>
  );
};

export default Validation;
