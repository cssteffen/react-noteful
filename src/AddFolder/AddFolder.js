import React from "react";
import { Link } from "react-router-dom";
import "./AddFolder.css";

export default class AddFolder extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="folderForm">
          <fieldset>
            <legend>Create a folder</legend>
            <label htmlFor="selectFolder">
              <span>Folder Name</span>
            </label>
            <input
              className="selectFolder"
              type="text"
              name="title"
              id=""
              modified="Date"
              content="content"
            />
          </fieldset>
          <Link to="/">
            <button type="button" className="back btn">
              Back
            </button>
          </Link>
          <button type="submit" className="addFolder btn">
            Add folder
          </button>
        </form>
      </div>
    );
  }
}
