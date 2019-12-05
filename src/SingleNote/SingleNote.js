import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import './SingleNote.css';


export default class SingleNote extends React.Component {
  static contextType = ApiContext;

  render() {

    const { notes } = this.context;
    const noteId = this.props.match.params.noteId;
    const noteWithId = notes.find(note => note.id === noteId);

  return (
    <div className="note-list-item">
        <h2>
          <Link to={`/note/${noteWithId.id}`}>
            {noteWithId.name}
          </Link>
        </h2>
        <div className='note-date'>
          Last Modified: 
          {' '}
          <span className='date'>
            {noteWithId.modified.slice(0, 10)}
          </span>
        </div>
        <button className='delete' type='button' onClick={e => this.deleteBookmarkRequest(noteWithId.id)} >Delete Note</button>
        <div>{noteWithId.content}</div>
    </div>
  )
}
}