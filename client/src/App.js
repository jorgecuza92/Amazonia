import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { set } from "mongoose";
import Product from "./components/Product";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import requireAuth from "./components/requireAuth";
import Checkout from "./components/Checkout";
import Logout from './components/Logout'


function App(props) {
  const [sideToggle, setSideToggle] = useState(false);



  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={requireAuth(CartScreen)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/:username" component={requireAuth(Dashboard)} />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
