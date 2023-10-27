import React from "react";
import AllBlock from "./AllBlock";

const ActiveBlock = (props) => {
  const inputData = props.inputVar;
  const setInputData = props.inputMethod;
  const checkedList = props.checkVar;
  const setCheckedList = props.checkMethod;
  const active = true;
  return (
    <AllBlock
      inputVar={inputData}
      inputMethod={setInputData}
      checkVar={checkedList}
      checkMethod={setCheckedList}
      isActive={active}
    />
  );
};

export default ActiveBlock;
