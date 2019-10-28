const initialState = {
    notes: {
        notesList: [],
        newNote: {
            noteId: '',
            title: '',
            text: '',
            name: ''
        },
        searchText: 'a'
    },
    ui: {
        isAddNotesFormHidden: true
    }
}

export default initialState;