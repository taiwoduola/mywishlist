import React from "react";

import "./signinsidebar.styles.scss";

function SideBar({ text, Icon, icon }) {
  return (
    <div className="sidebars">
      {icon ? <Icon /> : null}
      <p>{text}</p>
    </div>
  );
}

export default SideBar;
