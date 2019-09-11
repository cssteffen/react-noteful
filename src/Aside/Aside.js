import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="folderList">
          <li>Folder 1</li>
          <li>Folder 2</li>
          <li>Folder 3</li>
          <li>Folder 4</li>
          <Link to="/addFolder">
            <button className="addFolder btn">Add Folder</button>
          </Link>
        </div>
      </aside>
    );
  }
}

export default Aside;
