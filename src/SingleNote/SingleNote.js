import React from 'react';
import ApiContext from '../ApiContext';
import NoteListItem from '../NoteListItem/NoteListItem'
import './SingleNote.css';


export default class SingleNote extends React.Component {
  static contextType = ApiContext;

  render() {

    const { notes } = this.context;
    const noteId = this.props.match.params.noteId;
    const noteWithId = notes.find(note => note.id === noteId);
    console.log(notes)
  return (
    <div className="main-container">
      <ul className="note-list">
        <li>
          <NoteListItem
            id={noteWithId.id}
            name={noteWithId.name}
            date={noteWithId.modified}
            deleteNote={this.context.deleteNote}
          />
        </li>
        <div className="note-desc">{noteWithId.content}</div>
      </ul>
        
    </div>
  )
}
}