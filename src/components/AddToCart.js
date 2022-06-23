import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../selectors/cart";

import { addToCart, removeFromCart } from "../store/cart";

function AddToCart({ product }) {
  const products = useSelector(cartSelector);
  const dispatch = useDispatch();

  const quantity = products[product.id]?.quantity || 0;

  function add() {
    dispatch(addToCart(product));
  }

  function remove() {
    dispatch(removeFromCart(product.id));
  }

  if (quantity > 0) {
    return (
      <div className="product-control">
        <button onClick={remove} className="product-add">
          -
        </button>
        <div className="product-qty">{products[product.id]?.quantity || 0}</div>
        <button onClick={add} className="product-add">
          +
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={add} className="product-add">
        Add to cart
      </button>
    );
  }
}

export default AddToCart;
