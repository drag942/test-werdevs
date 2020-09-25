
const initialState = {
    selectedDate: new Date(),
    showModal: false,
};

const SET_SELECTED_DATE = 'formSectionReducer/SET_SELECTED_DATE';
const SET_SHOW_MODAL = 'formSectionReducer/SET_SHOW_MODAL';

const homePageReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case SET_SELECTED_DATE: {
            return {
                ...state,
                selectedDate: action.payload,
            }
        }
        case SET_SHOW_MODAL: {
            return {
                ...state,
                showModal: action.payload
            }
        }
        default: return state;
    }

};

export const setSelectedDate = (payload: Date) => {
    return {
        type: SET_SELECTED_DATE,
        payload,
    };
};

export const setShowModal = (payload: Boolean) => {
    return {
        type: SET_SHOW_MODAL,
        payload,
    }
}


export default homePageReducer;