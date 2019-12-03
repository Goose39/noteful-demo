import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../SideBarMain/SideBarMain.css'


export default function SideBarNotes(props) {
  return (
    <div className='NoteListNav'>
      <button type="button" onClick={() => props.history.goBack()} >{"<<< Go Back"}</button>
      <h3>{props.folder.name}</h3>
    </div>
  )
}

SideBarNotes.defaultProps = {
  history: {
    goBack: () => {}
  }
}