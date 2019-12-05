import React from 'react';
import NoteListItem from '../NoteListItem/NoteListItem';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class NoteList extends React.Component {
  static contextType = ApiContext

  render() {
    const folderId = this.props.match.params
    const notes = this.context.notes
    //(!FolderId) ? notes : notes.filter(note => note.folderId === folderId )
    console.log("NoteList")
    console.log(folderId)

    return (
      <section className='note-list-container'>
        <ul className='note-list'>
          { notes.map(note =>
                    <li key={note.id}>
                      <NoteListItem
                        id={note.id}
                        name={note.name}
                        date={note.modified}
                        deleteNote={this.context.deleteNote}
                      />
                    </li> 
                    )
          }
        </ul>
        <Link to="/add-note">Add Note</Link>
      </section>
    )
  }
}