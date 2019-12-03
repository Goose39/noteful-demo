import React from 'react';
import NoteListItem from '../NoteListItem/NoteListItem'

class NoteList extends React.Component {
  render() {
    const notes = this.props.notes.map(note => {
      return <li className="note-list-item">
              <NoteListItem name={note.name} key={note.id} date={note.modified} id={note.id} />
             </li>
    })

    return (
      <section className="note-list-container">
        <ul className="note-list">
          {notes}
        </ul>
        <button>Add Note</button>
      </section>
    )
  }
}

NoteList.defaultProps = {
  notes: [],
}

export default NoteList;