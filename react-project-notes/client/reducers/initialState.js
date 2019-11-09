const initialState = {
    notes: {
        notesList: [],
        newNote: {
            _id:'',
            id: '',
            title: '',
            text: '',
            name: ''
        },
        searchText: ''
    },
    ui: {
        isAddNotesFormHidden: true
    }
}

export default initialState;