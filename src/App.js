import React from "react";
import { Route, Switch } from "react-router-dom";
import dummyStore from "./dummy-store";
import "./App.css";
import AddNote from "./AddNote/AddNote";
import MainView from "./MainView/MainView";
import Header from "./Header/Header";
import AddFolder from "./AddFolder/AddFolder";
import NoteView from "./NoteView/NoteView";

class App extends React.Component {
  findNote(noteId) {
    const note = dummyStore.notes.find(note => note.id === noteId);
    return note;
  }

  findFolder(folderId) {
    const folder = dummyStore.folders.find(folder => folder.id === folderId);
    return folder;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/newNote" component={AddNote} />
          <Route path="/addFolder" component={AddFolder} />
          <Route
            path="/note/:id"
            component={props => {
              let note = this.findNote(props.match.params.id);
              return <NoteView note={note} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

//<Route component={NotFoundPage} />
/*
            <Route 
            path="/" 
            render={(routerProps) =>
            <FolderSidebar
            aFolder={this.state.folder.find(folder => folder.id === routeProps.match.params.folderId)}}
            component={MainSidebar} />
            <Route path="/folder" component={FolderSidebar} />




                    <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/newNote" component={AddNote} />
          <Route path="/addFolder" component={AddFolder} />
          <Route path="/note/:name" component={NoteView} />
        </Switch>
            */
