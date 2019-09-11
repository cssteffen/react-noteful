import React from "react";
import { Route, Switch } from "react-router-dom";
import "./dummy-store";
import "./App.css";
//import Header from "./Header/Header";
//import Main from "./Main/Main";
//import Aside from "./Aside/Aside";
import AddNote from "./AddNote/AddNote";
import MainView from "./MainView/MainView";
import Header from "./Header/Header";
import AddFolder from "./AddFolder/AddFolder";

class App extends React.Component {
  /*
  constructor() {
    super(props);
    state = {
      folders: [],
      notes: []
    };
  }*/

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/newNote" component={AddNote} />
          <Route path="/addFolder" component={AddFolder} />
        </Switch>
      </div>
    );
  }
}

export default App;

//<Route component={NotFoundPage} />
