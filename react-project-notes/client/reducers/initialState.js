let user = JSON.parse(localStorage.getItem(['user']));
console.log(user);

const initialState = {
    notes: {
        notesList: [],
        newNote: {
            _id:'',
            id: '',
            title: '',
            text: '',
            name: '',
            color: ''
        },
        searchText: 'test'
    },
    ui: {
        isAddNotesFormHidden: true
    },
    user: {}
}

export default initialState;