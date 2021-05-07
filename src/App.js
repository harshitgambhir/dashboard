import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DataProvider from "./context/DataContext";
import Categories from './pages/Categories';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function CustomRoute({ children, ...rest }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <div className="h-full">
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
          <div className="md:ml-64 bg-blueGray-100 min-h-full">
            <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
            {children}
          </div>
        </div>
      )}
    />
  );
}

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            <CustomRoute exact path="/">
              <Home />
            </CustomRoute>
            <CustomRoute path="/categories">
              <Categories />
            </CustomRoute>
            <CustomRoute path="/products">
              <Products />
            </CustomRoute>
            <CustomRoute path="/orders">
              <Orders />
            </CustomRoute>
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;