import React, { useState } from "react";

import { Menu } from "antd";
const items = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "Active",
    key: "active",
  },

  {
    label: "Completed",
    key: "complete",
  },
];
const MenuItem = (props) => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    if (e.key === "all") {
      props.method.all(true);
      props.method.active(false);
      props.method.complete(false);
    } else if (e.key === "active") {
      props.method.all(false);
      props.method.active(true);
      props.method.complete(false);
    } else {
      props.method.all(false);
      props.method.active(false);
      props.method.complete(true);
    }
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    />
  );
};
export default MenuItem;
