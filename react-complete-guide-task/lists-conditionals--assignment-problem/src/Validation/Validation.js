import React from "react";

const Validation = (props) => {
  const txtLength = props.txtlength;
  return (
    <div>
      {txtLength > 5 ? <p>{"Text long enough"}</p> : <p>{"Text too short"}</p>}
    </div>
  );
};

export default Validation;
