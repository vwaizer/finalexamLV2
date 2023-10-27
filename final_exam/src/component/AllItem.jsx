import React, { useState } from "react";
import { Checkbox } from "antd";








const AllItem = (props) => {
  const [changeClass, setChangeClass] = useState(false);
  const checkedList = props.checkVar;
  console.log(checkedList);
  const setCheckedList = props.checkMethod;
  const dataBase = props.data;
  const active = props.isActive;
  console.log(active);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setChangeClass(e.target.checked);
    setCheckedList([...checkedList, { checked: changeClass, name: dataBase }]);
  };
  return (
    <div className="allContainer">
      {!active ? (
        <Checkbox
          onChange={onChange}
          style={
            changeClass
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {dataBase}
        </Checkbox>
      ) : (
        <Checkbox
          onChange={onChange}
          style={changeClass ? { display: "none" } : { display: "flex" }}
        >
          {dataBase}
        </Checkbox>
      )}
    </div>
  );
};
export default AllItem;
