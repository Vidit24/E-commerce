import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import useApi from "../hooks/useApi";
import Loader from "./Loader";

function CategoryBar() {
  const history = useHistory();
  const { isLoading, loadError, data } = useApi(
    "https://fakestoreapi.com/products/categories",
    []
  );

  useEffect(() => {
    if (data.length > 0) {
      history.replace(`/category/${data[0]}`);
    }
  }, [data, history]);

  function ui() {
    if (isLoading) {
      return <Loader />;
    } else if (loadError) {
      return <div>{loadError.message}</div>;
    } else {
      return (
        <div className="category-items">
          {data.map((categoryName) => (
            <NavLink
              key={categoryName}
              className="category-item"
              activeClassName="selected"
              to={`/category/${categoryName}`}
            >
              {categoryName}
            </NavLink>
          ))}
        </div>
      );
    }
  }

  return <div className="category-bar">{ui()}</div>;
}

export default CategoryBar;
