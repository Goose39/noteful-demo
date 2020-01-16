import React from 'react';
import './AddNote.css'
import ApiContext from '../ApiContext';
import config from '../config';

const uuidv4 = require('uuid/v4');

export default class AddNoteForm extends React.Component {
  static contextType = ApiContext;

  addNoteRequest = (e) =>  {
    e.preventDefault()
    // const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const randomId = uuidv4();

    const newNote = {
      note_name: e.target['name'].value,
      id: randomId,
      content: e.target['desc'].value,
      folderid: e.target['folder'].value,
      modified: new Date().toISOString()
    }

    fetch(`${config.API_ENDPOINT}/api/notes/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `Bearer ${config.API_TOKEN}`
    },
    body: JSON.stringify(newNote)
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
      .then(() => {
        this.context.addNote(newNote)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
  const options = this.context.folders.map(folder => 
    <option key={folder.id} value={folder.id}>
      {folder.folder_name}
    </option>
    )

  return (
    <>
      <h2>Create Note</h2>
       <form className="add_note_form" onSubmit={e => this.addNoteRequest(e)}> 
        <div className="input_field">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" required/>
        </div>
        <div className="input_field">
          <label htmlFor={"desc"}>Content</label>
          <textarea name="desc" id="desc" defaultValue="Enter Note text here"></textarea>
        </div>
        <div className="input_field">
          <label htmlFor="folder">Folder</label>
          <select name="folder" id="folder">{ options ? options : null }</select>
        </div>
        <button type="submit" >Add Folder</button>
      </form>
    </>
  )
  }
}