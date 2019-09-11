import React from "react";
import "./FolderPage.css";

class FolderPage extends React.Component {
  render() {
    return (
      <div className="MainRoute">
        <header>
          <a href="#">
            <h1>Noteful</h1>
          </a>
        </header>
        <div className="content">
          <aside>
            <div className="folderList">
              <li className="selected">Folder 1</li>
              <li>Folder 2</li>
              <li>Folder 3</li>
              <li>Folder 4</li>
              <button className="addFolder btn">Add Folder</button>
            </div>
          </aside>
          <main>
            <div className="mainContainer">
              <li>
                <div className="noteInfo">
                  <a href="#">
                    <h2>Note 1</h2>
                  </a>
                  <p>Date modified on 3rd Jan 2019</p>
                </div>
                <button className="delete btn">Delete Note</button>
              </li>
              <li>
                <div className="noteInfo">
                  <a href="#">
                    <h2>Note 2</h2>
                  </a>
                  <p>Date modified on 3rd Jan 2019</p>
                </div>
                <button className="delete btn">Delete Note</button>
              </li>

              <button className="addNote btn">Add note</button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default FolderPage;
