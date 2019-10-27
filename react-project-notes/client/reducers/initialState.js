const initialState = {
    notes: {
        notesList: [],
        newNote: {
            title: '',
            text: '',
            name: '',
            surname: ''
        },
        searchText: 'a'
    },
    ui: {
        isAddNotesFormHidden: true
    }
}

export default initialState;