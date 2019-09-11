import React from "react";
import "./NotePage.css";

class NotePage extends React.Component {
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
              <button className="addFolder btn">Go Back</button>
              <h2>Folder 1</h2>
            </div>
          </aside>
          <main>
            <div className="mainContainer">
              <li>
                <div className="noteInfo">
                  <a href="#">
                    <h2>Note 2</h2>
                  </a>
                  <p>Date modified on 3rd Jan 2019</p>
                </div>
                <button className="delete btn">Delete Note</button>
              </li>
              <div className="noteContent">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nnc
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem felis nec erat.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nnc
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem felis nec erat.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nnc
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem felis nec erat.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default NotePage;
