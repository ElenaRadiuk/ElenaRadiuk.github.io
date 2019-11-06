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
        searchText: 'a'
    },
    ui: {
        isAddNotesFormHidden: true
    }
}

export default initialState;