const initialState = {
    notes: {
        notesList: [],
        newNote: {
            id: '',
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