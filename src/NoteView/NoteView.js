import React from "react";
import { Link } from "react-router-dom";
import "./NoteView.css";
import Note from "../Note/Note";
//import NoteItem from "../NoteItem/NoteItem";
//import NOTES from "../dummy-store";

export default class NoteView extends React.Component {
  render() {
    //const filteredNote = this.props.notes.map(note=>
    // )
    //}
    return (
      <div className="mainView">
        <div className="content">
          <aside>
            <div className="folderList">
              <Link to="/">
                <button type="button" className="back btn">
                  Back
                </button>
              </Link>
              <h2>Folder 1</h2>
            </div>
          </aside>
          <main>
            <div className="mainContainer">
              <div className="noteInfo">
                <Note {...this.props} />

                <div className="noteContent">
                  <p>{this.props.note.content}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
