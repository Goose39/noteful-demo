import React from 'react';
import NoteListItem from '../NoteListItem/NoteListItem';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class NoteList extends React.Component {
  static contextType = ApiContext

  render() {
    const folderId = (this.props.match.params)? this.props.match.params.folderId : null
    const notes = (folderId)? this.context.notes.filter(note => note.folderId === this.props.match.params.folderId) :this.context.notes
    console.log(`NoteList:fodlerId = ${folderId}`)

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