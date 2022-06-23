const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const INITIAL_STATE = {};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = { ...state };
      if (newState[action.payload.id]) {
        const newItem = { ...newState[action.payload.id] };
        newItem.quantity += 1;
        newState[action.payload.id] = newItem;
      } else {
        newState[action.payload.id] = {
          title: action.payload.title,
          id: action.payload.id,
          quantity: 1,
          price: action.payload.price
        };
      }
      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = { ...state };
      if (!newState[action.payload]) return newState;

      if (newState[action.payload].quantity === 1) {
        delete newState[action.payload];
      } else {
        const newProduct = { ...newState[action.payload] };
        newProduct.quantity -= 1;
        newState[action.payload] = {
          ...newProduct
        };
      }
      return newState;
    }
    default:
      return state;
  }
}
