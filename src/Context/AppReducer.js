export default (state,action)=>{
    switch (action.type) {
        case 'ADD_TOCART':
            return {
                ...state,
                Cart:[action.payload,...state.Cart]
            }
            case 'REMOVE_TOCART':
                return {
                    ...state,
                    Cart:[...state.Cart.filter((c)=>c.id!==action.payload)]
                }
    default:
        return state;
    }
}