import React from 'react';
import './AddNoteForm.css'
import ApiContext from '../ApiContext';

export default class AddNoteForm extends React.Component {
  
  static contextType = ApiContext;

  render() {
  const options = this.context.folders.map(folder => 
    <option>{folder.name}</option>
    )
    console.log(this.context.folders)
  return (
    <div>
      <h2>Create Note</h2>
      <form className="add_note_form">
        <label>Name
          <input type="text" />
        </label>
        <label>Content
          <textarea name="desc">
            Enter Note text here
          </textarea>
        </label>
        <label>Folder
          <select>
            {options}
          </select>
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </div>
  )
  }
}