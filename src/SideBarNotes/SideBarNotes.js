import React from 'react';
import ApiContext from '../ApiContext';
import '../SideBarMain/SideBarMain.css';
import './SideBarNotes.css'


export default class SideBarNotes extends React.Component {
  static contextType = ApiContext;

  render() {
    const { folders } = this.context;
    const folderId = this.props.match.params.folderId
    const folderWithId = folders.find(folder => folder.id === folderId)

  return (
    <div className='NoteListNav'>
      <button  className="link-btn" type="button" onClick={() => this.props.history.goBack()} >{"<<< Go Back"}</button>
      <h2>{ (folderWithId) ? folderWithId.folder_name : ""}</h2>
    </div>
  )
}
}