import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './NoteItem.css';

export default function NoteListItem(props) {
  //console.log(format(props.date, 'Do MMM YYYY'))
  return (
    <div className="Note">
        <h2>
          <Link to={`/note/${props.id}`}>
            {props.name}
          </Link>
        </h2>
        <div className='note-date'>
          Last Modified: 
          {' '}
          <span className='Date'>
            {/* {format(props.date, 'Do MMM YYYY')} */}
            

          </span>
        </div>
        <button className='delete' type='button'>Delete Note</button>
    </div>
  )
}

