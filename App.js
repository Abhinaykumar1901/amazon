import React,{ useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue(); 

  useEffect(() => {

      
    auth.onAuthStateChanged( authUser => {
      console.log('The user is >>> ',authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  //it is like if statement in react 
        //it will only run once when the app component loads

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
        <Header />
            <Orders />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />          {/* default route should be at bottom otherwise it wont listen */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
