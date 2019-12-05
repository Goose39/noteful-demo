import React from 'react';
import './AddFolderForm.css';

export default function AddFolderForm() {
  return (
    <div className="form_container">
      <h2>Create Folder</h2>
      <form className="add_folder_form">
        <label>Name
        <input type="text" />
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </div>
  )
}