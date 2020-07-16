var redux = require('redux');
const noteInitialState = {
    addItem: {},
}
//function push idForOrderPage into arrayIdForOrderPage
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "GET_ADD_DATA":
            return { ...state, addItem: action.addItem }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function () {
//     console.log(store.getState());

// })
export default store;
