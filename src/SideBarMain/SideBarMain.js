import React from 'react';
import ApiContext from '../ApiContext';
import { NavLink, Link } from 'react-router-dom';
import './SideBarMain.css';

export default class SideBarMain extends React.Component {
  static contextType = ApiContext;

  render() {
    const folders = this.context.folders
    return (
      <div>
        <ul className='sidebar-list'>
          {folders.map(folder =>
            <li key={folder.id}>
              <NavLink
                className='sidebar-item'
                to={`/folder/${folder.id}`}
                onClick={() => this.context.selectedFolder}
              >
                {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
        <Link to='/add-folder' type='button' className='button'>Add Folder</Link>
      </div>
    )
  }
}