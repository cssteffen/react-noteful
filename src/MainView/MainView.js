import React from "react";
import { Route } from "react-router-dom";
import "../dummy-store";
import "./MainView.css";
//import Header from "../Header/Header";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";
import NOTES from "../dummy-store";
import NoteView from "../NoteView/NoteView";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      folders: NOTES.folders,
      notes: NOTES.notes
    };
  }

  findFolder(folderId) {
    const folder = this.state.folders.find(folder => folder.id === folderId);
    return folder;
  }

  findFolderNotes(folderId, id) {
    const folderNotes = this.state.notes.filter(folderId === id);
    return folderNotes;
  }
  render() {
    return (
      <div className="mainView">
        <div className="content">
          <Aside folders={this.state.folders}>
            <Route
              path="/folder/:id"
              component={props => {
                let folder = this.findFolder(props.match.params.id);
                let folderNotes = this.findFolderNotes(props.match.params.id);
                return <NoteView folder={folder} folderNotes={folderNotes} />;
              }}
            />
          </Aside>

          <Main folders={this.state.folders} notes={this.state.notes}>
            {/*
            <Route path="/" component={MainMain} />
            <Route path="/folder" component={FolderMain} />
            */}
          </Main>
        </div>
      </div>
    );
  }
}

export default MainView;
