import React from "react";
import CompleteItem from "./CompleteItem";
import { Button } from "antd";

const CompleteBlock = (props) => {
  const data = props.checkVar;
  const dataSet = data.filter((item) => {
    return item.checked === false;
  });
  console.log(data);
  console.log(dataSet);

  return (
    <div className="completeBlock">
      <div className="completeClass">
        {dataSet.map((item) => {
          return <CompleteItem data={item} />;
        })}
        <div>
          <Button danger>Delete All</Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteBlock;
