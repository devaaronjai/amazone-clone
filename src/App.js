import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HlVqNEtW32UzWG1HJqqwOkxMNFzOKdGxqDkmiFuChFgeZZzpZY83h4sQuhhgFCpbXb6rFxTc6DxE1cCz8raPVrC00JKUcBjTB ")


function App() {
  const [{user},dispatch ] =useStateValue();
  useEffect(()=>{
     auth
        .onAuthStateChanged(authUser=>{
          console.log("the user is", authUser);
          if(authUser){
             dispatch({
               type: "SET_USER",
               user : authUser
             })
          }else{
             dispatch({
               type:"SET_USER",
               user: null
             })
          }
        })
  },[])
  return (
    <Router>
    
    <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
     <Route exact path="/checkout">
        <Header />
        <Checkout />
    </Route>
    <Route exact path="/payment">
       <Header />
     <Elements stripe={promise}> 
       <Payment />
      </Elements>
    </Route>
    <Route exact path="/">
        <Header />
        <Home />
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
