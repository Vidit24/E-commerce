const FETCH_PROUDUCTS_INIT = "FETCH_PROUDUCTS_INIT";
const FETCH_PRODUCTS_DONE = "FETCH_PRODUCTS_DONE";
const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const fetchProductsInit = () => ({
  type: FETCH_PROUDUCTS_INIT
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error
});

export const fetchProductsDone = (data) => {
  return {
    type: FETCH_PRODUCTS_DONE,
    payload: data
  };
};

export const fetchProducts = (categoryId) => {
  return async (dispatch, getState) => {
    const { isLoading } = getState().products;

    if (isLoading) return;

    dispatch(fetchProductsInit());

    try {
      const resp = await fetch(
        `https://fakestoreapi.com/products/category/${categoryId}`
      );
      const data = await resp.json();

      dispatch(fetchProductsDone(data));
    } catch (e) {
      dispatch(fetchProductsError(e));
    }
    return {
      type: FETCH_PROUDUCTS_INIT,
      payload: categoryId
    };
  };
};

const INITIAL_STATE = {
  isLoading: false,
  loadError: null,
  data: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROUDUCTS_INIT:
      return {
        ...INITIAL_STATE,
        isLoading: true,
        loadError: null
      };
    case FETCH_PRODUCTS_DONE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loadError: action.payload,
        data: null,
        isLoading: false
      };
    default:
      return state;
  }
}
