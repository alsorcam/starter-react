import { createStore } from 'redux';

// CONSTANTS
const BLOCK_UI = 'BLOCK_UI';
const UNBLOCK_UI = 'UNBLOCK_UI';

// REDUCER
const initialState = {
	blocking: false
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case BLOCK_UI:
			return {
				...state,
				blocking: true
			};
		case UNBLOCK_UI:
			return {
				...state,
				blocking: false
			};
		default:
			return state;
	}
};

// ACTIONS
export const blockUI = (obj) => {
	return {
		type: BLOCK_UI,
		obj
	};
};
export const unblockUI = (obj) => {
	return {
		type: UNBLOCK_UI,
		obj
	};
};

// STORE
export const blockUIStore = createStore(reducer);
