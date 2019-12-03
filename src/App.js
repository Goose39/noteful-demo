import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import SideBarMain from './SideBarMain/SideBarMain';
import SideBarNotes from './SideBarNotes/SideBarNotes';
import data from './dumy-store';
import NoteList from './NoteList/NoteList';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      data: {data}
    }
  };

  handleAddNote = () => {

  }

  handleAddFolder = () => {

  }

  handleDeleteNote = () => {

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to='/'>Noteful App</Link></h1>
      </header>
      <div>

        <Route 
          path="/" 
          exact 
          render={ () => 
            <SideBarMain folders={this.state.data.data.folders} addFolder={this.handleAddFolder} />}
        />
        <Route 
          path="/" 
          exact 
          render={ () => 
            <NoteList notes={this.state.data.data.notes} deleteNote={this.handleDeleteNote} />}
        />

        <Route
          path={"/folder/:folderId"}
          exact
          render={routeProps => (
              <NoteList
                  folders={this.state.data.data.folders}
                  notes={this.state.data.data.notes}
                  {...routeProps}
              />
          )}
        />

        <Route
          path={"/folder/:folderId"}
          exact
          render={routeProps => (
              <SideBarNotes
                  folders={this.state.data.data.folders}
                  notes={this.state.data.data.notes}
                  {...routeProps}
              />
          )}
        />

        <Route
          path={"/folder/:folderId"}
          exact
          render={routeProps => (
              <NoteList
                  folders={this.state.data.data.folders}
                  notes={this.state.data.data.notes}
                  {...routeProps}
              />
          )}
        />

        <Route
          path={"/folder/:folderId"}
          exact
          render={routeProps => (
              <SideBarNotes
                  folders={this.state.data.data.folders}
                  notes={this.state.data.data.notes}
                  {...routeProps}
              />
          )}
        />


        <Route path="/add-folder" component={<SideBarMain />} />
        <Route path="/add-note" component={<SideBarMain />} />
        
      </div>
    </div>
  );
  }
}

export default App;
