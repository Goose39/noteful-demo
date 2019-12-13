import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import SideBarMain from './SideBarMain/SideBarMain';
import SideBarNotes from './SideBarNotes/SideBarNotes';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import config from './config';
import ApiContext from './ApiContext';
import NoteList from './NoteList/NoteList';
import SingleNote from './SingleNote/SingleNote';
import SideBarSingleNote from './SideBarSingleNote/SideBarSingleNote';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.css';


class App extends Component{
  state = {
    notes: [],
    folders: [], 
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
}

  handleAddNote = (note) => {
    this.props.history.push("/");
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  handleAddFolder = (folderName) => {
    this.props.history.push("/");
    this.setState({
      folders: [...this.state.folders, folderName]
    });
  }

  handleDeleteNote = (noteId) => {
    this.props.history.push("/");
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
};

renderNavRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={SideBarMain} />
      <Route path="/folder/:folderId" component={SideBarMain} />
      <Route path="/add-folder" component={SideBarNotes} />
      <Route path="/add-note" component={SideBarNotes} />
      <ErrorBoundary>
        <Route path="/note/:noteId" component={SideBarSingleNote} />
      </ErrorBoundary>
    </Switch>
  );
}

renderMainRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={NoteList} />
      <Route path="/folder/:folderId" component={NoteList} />
      <Route path="/add-folder" component={AddFolder} />
      <Route path="/add-note" component={AddNote} />
      <ErrorBoundary>
       <Route exact path="/note/:noteId" component={SingleNote} />
      </ErrorBoundary>
      <Route component={NoteList} />
    </Switch>
  );
}

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote, 
      addFolder: this.handleAddFolder, 
      addNote: this.handleAddNote, 
      selectedFolderId: this.state.selectedFolder, 
      SelectedNoteId: this.state.selectedNote,
    };
  return (
    <ApiContext.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/">Noteful App</Link>
          </h1>
        </header>
          <nav className="sidebar-container">{this.renderNavRoutes()}</nav>
          <main className="main-container">{this.renderMainRoutes()}</main>
      </div>
    </ApiContext.Provider>
  );
  }
}

export default withRouter(App);
