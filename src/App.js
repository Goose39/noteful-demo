import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideBarMain from './SideBarMain/SideBarMain';
import SideBarNotes from './SideBarNotes/SideBarNotes';
import AddFolderForm from './AddFolderForm/AddFolderForm';
import AddNoteForm from './AddNoteForm/AddNoteForm';
import config from './config';
import ApiContext from './ApiContext';
import NoteListItem from './NoteListItem/NoteListItem';
import NoteList from './NoteList/NoteList';
import SingleNote from './SingleNote/SingleNote'
import './App.css';


class App extends Component{
  state = {
    notes: [],
    folders: [], 
    selectedNoteId: "", 
    selectedFolderId: "",
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

  handleAddNote = ( {noteProps} ) => {
    this.setState({
      notes: [...this.state.folders, noteProps]
    });
  }

  handleAddFolder = (folderName) => {
    this.setState({
      notes: [...this.state.notes, folderName]
    });
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
};

renderNavRoutes() {
  return (
    <>
      <Route exact path="/" component={SideBarMain} />
      <Route path="/folder/:folderId" component={SideBarNotes} />
      <Route path="/note/:noteId" component={SideBarNotes} />
      <Route path="/add-folder" component={SideBarMain} />
      <Route path="/add-note" component={SideBarMain} />
    </>
  );
}

renderMainRoutes() {
  return (
    <>
      {['/', '/folder/:folderId'].map(path => (
        <Route
          exact
          path={path}
          component={NoteList}
        />
      ))}
      <Route path="/note/:noteId" component={SingleNote} />
      <Route path="/add-folder" component={AddFolderForm} />
      <Route path="/add-note" component={AddNoteForm} />
    </>
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

export default App;
