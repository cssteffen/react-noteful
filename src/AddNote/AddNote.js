import React from "react";
import { Link } from "react-router-dom";
import "./AddNote.css";
//import Header from "../Header/Header";

export default class AddNote extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="noteForm">
          <fieldset>
            <legend>Create a Note</legend>
            <label htmlFor="note_input_title">
              Title
              <input
                id="note_input_title"
                type="text"
                name="title"
                placeholder="Note Title"
              />
            </label>
            <label htmlFor="note_input_content">Content</label>
            <textarea id="note_input_content"></textarea>
            <label htmlFor="selectFolder">Select a Folder</label>
            <select id="note_selected_folder">
              <option value="">...</option>
              <option value="Folder1">Folder 1</option>
              <option value="Folder2">Folder 2</option>
              <option value="Folder2">Folder 3</option>
            </select>
          </fieldset>
          <Link to="/">
            <button type="button" className="back btn">
              Back
            </button>
          </Link>
          <button type="submit" className="addFolder btn">
            Save Note
          </button>
        </form>
      </div>
    );
  }
}
/*
<div className="container">
        <form>
          <fieldset>
            <label for="selectFolder">
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
}*/
