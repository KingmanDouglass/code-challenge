const calculationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CALC':
            return action.payload;
        default:
            return state;
    }
}

export default calculationsReducer;