import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import { format } from 'date-fns';
import './NoteItem.css';


export default class NoteListItem extends React.Component {
  static contextType = ApiContext

  deleteBookmarkRequest = (noteId) =>  {
    fetch(`http://localhost:9090/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
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
    <div className="note-list-item">
        <h2>
          <Link to={`/note/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <div className='note-date'>
          Last Modified: 
          {' '}
          <span className='date'>
            {this.props.date.slice(0, 10)}
            {/* {format(props.date, "Do MMM YYYY")} */}
            

          </span>
        </div>
        <button className='delete' type='button' onClick={e => this.deleteBookmarkRequest(this.props.id)} >Delete Note</button>
    </div>
  )
}
}
