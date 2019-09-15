import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";

class Aside extends React.Component {
  render() {
    const folderList = this.props.folders.map(item => (
      <li key={item.id}>{item.name}</li>
    ));
    return (
      <aside>
        <div className="folderList">
          {folderList}
          <Link to="/addFolder">
            <button className="addFolder btn">Add Folder</button>
          </Link>
        </div>
      </aside>
    );
  }
}

export default Aside;
