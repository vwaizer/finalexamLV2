import { Button, Checkbox } from "antd";
import React from "react";
import { BsTrash } from "react-icons/bs";


const CompleteItem = (props) => {
  const title = props.data.name;
  return (
    <div>
      <div className="rowBlock">
        <Checkbox checked>{title}</Checkbox>
        <Button>
          <BsTrash />
        </Button>
      </div>
      
      
    </div>
  );
};

export default CompleteItem;
