import React, { useState } from "react";

import MenuItem from "./MenuItem";
import AllBlock from "./AllBlock";
import ActiveBlock from "./ActiveBlock";
import CompleteBlock from "./CompleteBlock";

const Content = () => {
  const [pageAll, setPageAll] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [checkedList, setCheckedList] = useState([{}]);
  const active = false;
  const [pageActive, setPageActive] = useState(false);
  const [pageComplete, setPageComplete] = useState(false);
  console.log(pageAll, pageActive, pageComplete);
  return (
    <div>
      <div className="headerBlock">
        <h1>#todo</h1>
      </div>
      <div className="menuItem">
        <MenuItem
          method={{
            all: setPageAll,
            active: setPageActive,
            complete: setPageComplete,
          }}
        />
      </div>

      <div className="Block">
        {pageAll && (
          <div>
            <AllBlock
              inputVar={inputData}
              inputMethod={setInputData}
              checkVar={checkedList}
              checkMethod={setCheckedList}
              isActive={active}
            />
          </div>
        )}
        {pageActive && (
          <div>
            <ActiveBlock
              inputVar={inputData}
              inputMethod={setInputData}
              checkVar={checkedList}
              checkMethod={setCheckedList}
            />
          </div>
        )}
        {pageComplete && (
          <div>
            <CompleteBlock
              checkVar={checkedList}
              checkMethod={setCheckedList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
