import axios from 'axios';

export const addNote = () => {
    return {
        type: "ADD_NOTE"
    }
}

export const deleteNote = (noteId) => {
	return {
		type: "DELETE_NOTE",
		noteId
	}
}

export const getListNotes = (notes) => {
	return {
		type: "GET_LIST_NOTES",
		notes
	}
}


export const handleInputChange = (name, value) => {
    return {
        type: "HANDLE_INPUT_CHANGE",
        payload: {[name]: value}
    }
}

export const toggleNotesForm = () => {
    return {
        type: "TOGGLE_NOTES_FORM"
    }
}

export const requestNotes = () => {
    console.log("inside requestNotes");
	return {
		type: "REQUEST_NOTES",
		payload: true
	}
}

export const receiveNotes = (json) => {
	return {
		type: "RECEIVE_NOTES",
		payload: json.notes
	}
}

export const receiveNotesError = (err) => {
	return {
		type: "ERROR",
		payload: err
	}
}

export const fetchNotes = () => {
	return (dispatch) => {

		dispatch(requestNotes());
		return axios
			.get('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
			.then(response => {
				dispatch(receiveNotes(response.data))
			})
			.catch ( err => {
				dispatch(receiveNotesError(err))
			})
	}
}