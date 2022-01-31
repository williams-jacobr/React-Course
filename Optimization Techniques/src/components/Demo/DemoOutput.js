import React from "react";

const DemoOutput = function (props) {
console.log('DEMOOUTPUT RUNNING');

  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(DemoOutput);
