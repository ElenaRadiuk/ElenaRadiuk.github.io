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
        searchText: 'test'
    },
    ui: {
        isAddNotesFormHidden: true
    }
}

export default initialState;