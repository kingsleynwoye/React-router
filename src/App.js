import { Route, Switch, Redirect } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="Welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
