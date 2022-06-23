import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles.scss";

import CategoryBar from "./components/CategoryBar";
import ProductsList from "./components/ProductsList";
import NotFound from "./components/NotFound";
import store from "./store";

/**
 * {
 *  '1': {
 *    title: "Sandisk",
 *    quantity: 2,
 *    price: 3000,
 *  },
 *  '2': {
 *    title: "Hard disk",
 *    quantity: 1,
 *    price: 3000,
 *  }
 * }
 */

// 1: null
// 1: { ... }

//  State or props change
// prevCart === newCart
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main">
          <CategoryBar />
          <Switch>
            <Route path="/category/:categoryId" component={ProductsList} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
