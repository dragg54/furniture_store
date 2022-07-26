export const ADD_TO_CART = "add_to_cart";
export const DELETE_FROM_CART = "delete_from_cart"

export const reducer = (state , action) => {
  switch (action.type) {
    case ADD_TO_CART:
       return [action.payload.items, ...state]

    case DELETE_FROM_CART:
      let newState = state.filter(items=>{
        return items !== action.payload.items
      })
      return [...newState]
    default:
      return state;
  }
}
