import React from "react";
//import { Link } from "react-router-dom";
import "./NoteItem.css";
//import NOTES from "../dummy-store";
import Note from "../Note/Note";
//import NoteView from "../NoteView/NoteView";

class NoteItem extends React.Component {
  render() {
    console.log("<NoteItem />" + this.props.notes);
    const noteList = this.props.notes.map(item => (
      <Note key={item.id} note={item} folders={this.props.folders} />
    ));
    return (
      <ul>
        {noteList}
        {console.log(this.props.notes)}
        {/*NOTES.notes.map(note => (
          <li key={note.id}>
            <div className="noteInfo">
              <Link to={`/note/${note.name}`}>
                <h2>{note.name}</h2>
              </Link>
              <p>{note.modified}</p>
            </div>
            <button className="deletebtn">Delete Note</button>
          </li>
        ))*/}
      </ul>
    );
  }
}

export default NoteItem;

/* ============
import { format } from "date-fns";

              <p>{format(note.modified, "Do MMM YYYY")}</p>



   const noteList = NOTES.map(note => <li key={note.id}>
      <h2>{note.name}</h2></li>);
    <ul>
        {noteList}
      </ul>


  ==================
            <li>
        <div className="noteInfo">
          <a href="#">
            <h2>Note 1</h2>
          </a>
          <p>Date modified on 3rd Jan 2019</p>
        </div>
        <button className="deletebtn">Delete Note</button>
      </li>
     

===============

const noteList = notes.map(note => <li key={note.id}>{note.name}</li>);
 notes: [
    {
      id: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Dogs",
      modified: "2019-01-03T00:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
    },
*/
