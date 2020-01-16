import React from 'react';
import ApiContext from '../ApiContext';
import '../SideBarMain/SideBarMain.css';
import '../SideBarNotes/SideBarNotes.css'


export default class SideBarSingleNote extends React.Component {
  static contextType = ApiContext;

  render() {
    const { notes } = this.context;
    const { folders } = this.context;
    const NoteId = this.props.match.params.noteId
    const folderIdFromNote = notes.find(note => note.id.toString() === NoteId)
    const folderWithId = folders.find(folder => folder.id === folderIdFromNote.folderid)

  return (
    <div className='NoteListNav'>
      <button  className="link-btn" type="button" onClick={() => this.props.history.goBack()} >{"<<< Go Back"}</button>
      <h2>{ (folderWithId) ? folderWithId.folder_name : ""}</h2>
    </div>
  )
}
}