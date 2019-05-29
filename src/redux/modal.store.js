import { createStore } from 'redux';

// CONSTANTS
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// REDUCER
const initialState = {
	modals: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				modals: state.modals.concat(action.obj)
			};
		case CLOSE_MODAL:
			return {
				...state,
				modals: state.modals.filter(item => item.id !== action.obj.id),
			};
		default:
			return state;
	}
};

// ACTIONS
export const openModal = (obj) => {
	return {
		type: OPEN_MODAL,
		obj
	};
};
export const closeModal = (obj) => {
	return {
		type: CLOSE_MODAL,
		obj
	};
};

// STORE
export const modalStore = createStore(reducer);