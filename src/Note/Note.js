import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <li key={props.note.id}>
      <div className="noteInfo">
        <Link to={`/note/${props.note.id}`}>
          <h2>{props.note.name}</h2>
        </Link>
        <p>{props.note.modified}</p>
      </div>
      <button className="deletebtn">Delete Note</button>
    </li>
  );
}
