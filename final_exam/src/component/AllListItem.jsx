import React from "react";
import AllItem from "./AllItem";

const AllListItem = (props) => {
  const dataBase = props.data;
  const checkedList = props.checkVar;
  const setCheckedList = props.checkMethod;

  const active = props.isActive;
  return (
    <div>
      {dataBase.map((item, index) => {
        return (
          <AllItem
            data={item}
            checkVar={checkedList}
            checkMethod={setCheckedList}
            isActive={active}
          />
        );
      })}
    </div>
  );
};

export default AllListItem;
