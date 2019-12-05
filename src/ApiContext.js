import React from 'react'

export default React.createContext({
  notes: [],
  folders: [],
  selectedFolderId: "",
  selectedNoteId: "",
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
})