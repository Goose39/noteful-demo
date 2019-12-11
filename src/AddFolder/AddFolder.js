import React from 'react';
import './AddFolder.css';
import ApiContext from '../ApiContext';

export default class AddFolderForm extends React.Component {
  static contextType = ApiContext;

  addFolderRequest = (e) =>  {
    e.preventDefault()
    const folderName = e.target.folderName.value
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const newFolder = {
      name: folderName,
      id: randomId,
    }

    fetch(`http://localhost:9090/folders/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newFolder),
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
        this.context.addFolder(newFolder);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
  
    
  return (
    <>
      <h2>Create Folder</h2>
      <form className="add_folder_form" onSubmit={this.addFolderRequest}>
        <label>Name
        <input name="folderName" type="text" required/>
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </>
  )
}
}