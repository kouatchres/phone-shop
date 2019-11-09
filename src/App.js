import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import Cart from './components/cart/Cart';
import PageNotFound from './components/PageNotFound';
import ProductModal from './components/ProductModal';

function App() {
    return ( 
    <> 
    <Navbar/>
    <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/details' component={ProductDetails}/>
      <Route exact path='/cart' component={Cart}/>
      <Route  component={PageNotFound}/>
    </Switch>
    <ProductModal />
    </>
      );
}

export default App;
  