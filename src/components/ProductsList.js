import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useApi from "../hooks/useApi";
import { fetchProducts } from "../store/products";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { categoryId } = useParams();
  const cart = useSelector((state) => state.cart);
  const { isLoading, data, loadError } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(categoryId));
  }, [dispatch, categoryId]);

  if (isLoading) {
    return <Loader />;
  } else if (loadError) {
    return <div>Failed to load products</div>;
  } else if (data.length > 0) {
    return (
      <div className="products-list">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart[product.id]} // {q: 1} === {q: 2}
          />
        ))}
      </div>
    );
  } else {
    return <div>No products in the current category</div>;
  }
}

export default ProductsList;
