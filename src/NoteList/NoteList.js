import React from 'react';
import NoteListItem from '../NoteListItem/NoteListItem';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';
import '../SideBarMain/SideBarMain.css';

export default class NoteList extends React.Component {
  static contextType = ApiContext

  render() {
    const folderId = (this.props.match.params)? this.props.match.params.folderId : null
    const notes = (folderId)? this.context.notes.filter(note => note.folderId === this.props.match.params.folderId) : this.context.notes
    return (
      <section className='note-list-container'>
        <ul className='note-list'>
          { notes.map(note =>
                        <NoteListItem
                          key={note.id}
                          id={note.id}
                          name={note.name}
                          date={note.modified}
                          deleteNote={this.context.deleteNote}
                        />
                        ) }
        </ul>
        <Link className="link-btn" to="/add-note">Add Note</Link>
      </section>
    )
  }
}