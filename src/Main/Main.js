import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import NoteItem from "../NoteItem/NoteItem";
//import AddNote from "../AddNote/AddNote";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <NoteItem notes={this.props.notes} folders={this.props.folders} />
          <Link to="/newNote">
            <button className="addNote btn">Add note</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Main;
/*          <NoteItem notes={this.props.notes} />
 */
