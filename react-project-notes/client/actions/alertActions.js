import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

const success = (message) => {
	console.log('alert message success');
    return {
        type: alertConstants.SUCCESS,
        message
    }
}

const error = (message) => {
	console.log('alert error');
    return {
        type: alertConstants.ERROR,
        message
    }
}

const clear = (message) => {
	console.log('alert clear');
    return {
        type: alertConstants.CLEAR
    }
}