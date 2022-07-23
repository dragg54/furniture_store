export const ADD_TO_CART = "add_to_cart";

export const reducer = (state , action) => {
  switch (action.type) {
    case ADD_TO_CART:
       return [action.payload.items, ...state]
    default:
      return state;
  }
}
