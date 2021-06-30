export const initialState = {
    value: 0
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'INCREMENT':
            return{
                ...state,
                value: action.value
            }
        case 'DECREMENT':
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
}
export default reducer;
