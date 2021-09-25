import "./Fonts.css";
import ProductPage from "./pages/ProductPage";
import GlobalStyle from "./components/shared/GlobalStyles";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/category/:category">
          <CategoryPage />
        </Route>
        <Route path="/product/:productID">
          <ProductPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
