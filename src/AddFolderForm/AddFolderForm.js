import React from 'react';

export default function AddFolderForm(props) {
  return (
    <div>
      <h2>Create Folder</h2>
      <form>
        <label>
          <input>Name</input>
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </div>
  )
}