import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SideBarMain.css'


export default function NoteListNav(props) {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        {props.folders.map(folder =>
          <li key={folder.id}>
            <NavLink to={`/folder/${folder.id}`}>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
        <Link to='/add-folder' type='button' className='button'>Add Folder</Link>
    </div>
  )
}

NoteListNav.defaultProps = {
  folders: []
}