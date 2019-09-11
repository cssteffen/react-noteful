import React from "react";
//import { Route } from "react-router-dom";
import "../dummy-store";
import "./MainView.css";
//import Header from "../Header/Header";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";

class MainView extends React.Component {
  render() {
    return (
      <div className="mainView">
        <div className="content">
          <Aside>
            {/*
            <Route 
            path="/" 
            render={(routerProps) =>
            <FolderSidebar
            aFolder={this.state.folder.find(folder => folder.id === routeProps.match.params.folderId)}}
            component={MainSidebar} />
            <Route path="/folder" component={FolderSidebar} />
            */}
          </Aside>

          <Main>
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
