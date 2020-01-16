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
            <li className='sidebar-item'>
              <NavLink
                className='sidebar-link'
                key={folder.id}
                to={`/folder/${folder.id}`}
                onClick={() => this.context.selectedFolder}
              >
                {folder.folder_name}
              </NavLink>
            </li>
          )}
        </ul>
        <Link className="link-btn" to='/add-folder'>Add Folder</Link>
      </div>
    )
  }
}