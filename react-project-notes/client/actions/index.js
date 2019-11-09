import axios from 'axios';

export const addNote = () => {
	console.log('add action');
    return {
        type: "ADD_NOTE"
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

export const receiveNotes = (notesList) => {
	return {
		type: "RECEIVE_NOTES",
		notesList
	}
}

export const receiveNotesError = (err) => {
	return {
		type: "ERROR",
		payload: err
	}
}



export const deleteNote = (id) => {
	console.log('del action'+id);
	return {
		type: "DELETE_NOTE",
		id
	}
}



export const getListNotes = (notes) => {
	return {
		type: "GET_LIST_NOTES",
		notes
	}
}

export const fetchNotes = (url) => {
	return (dispatch) => {

		dispatch(requestNotes());
		return axios
			.get(url)
			.then(response => {
				dispatch(receiveNotes(response.data)),
				console.log(response.data)
			})
			.catch ( err => {
				dispatch(receiveNotesError(err))
			})
	}
}