export default (state = null, action) => {
    switch (action.type) {
        case 'select_libarary':
                 return action.payload;
        default:
                 return state;

    }
};
