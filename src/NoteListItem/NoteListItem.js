import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import './NoteItem.css';
import PropTypes from 'prop-types';
import config from '../config';


export default class NoteListItem extends React.Component {
  static contextType = ApiContext

  deleteNoteRequest = (noteId) =>  {
    fetch(`${config.API_ENDPOINT}/api/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      "Authorization": `Bearer ${config.API_TOKEN}`
    },
    })
      .then(res => {
        if (!res.ok) 
          return res.json().then(e => Promise.reject(e))
      })
      .then(data => {
        this.props.deleteNote(noteId)
      })
      .catch(error => {
        console.log(error)
      })
  }

  

  render() {
  return (
    <li className="note-list-item">
      <h2>
        <Link to={`/note/${this.props.id}`}>
          {this.props.name}
        </Link>
      </h2>
      <div className='note-date'>
        Last Modified: 
        {' '}
        <span className='date'>
          { this.props.modified.slice(0, 10) }          
        </span>
      </div>
      <button className='delete' type='button' onClick={e => this.deleteNoteRequest(this.props.id)} >Delete Note</button>
    </li>
  )
}
}

NoteListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  modified: PropTypes.string,
};