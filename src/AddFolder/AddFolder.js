import React from 'react';
import './AddFolder.css';
import ApiContext from '../ApiContext';
import config from '../config';

const uuidv4 = require('uuid/v4');

export default class AddFolderForm extends React.Component {
  static contextType = ApiContext;

  addFolderRequest = (e) =>  {
    e.preventDefault()
    const folderName = e.target.folderName.value
    const randomId = uuidv4()

    const newFolder = {
      folder_name: folderName,
      id: randomId
    }

    fetch(`${config.API_ENDPOINT}/api/folders/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `Bearer ${config.API_TOKEN}`
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
        this.props.history.push("/");
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