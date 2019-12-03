import React from 'react';

export default function AddNoteForm(props) {
  const options = props.folders.map(folder => 
    <option>{folder}</option>
    )
  return (
    <div>
      <h2>Create Note</h2>
      <form>
        <label>
          <input>Name</input>
        </label>
        <label>
          <input>Content</input>
        </label>
        <label>
          <input type="select">
            {options}
          </input>
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </div>
  )
}

AddNoteForm.defaultProps = {
  folders: [test1, test2, test3],
}

