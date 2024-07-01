import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';  
import './App.css'
import ProductInfo from './components/ProductInfo';


const App=()=>{

  const [products, setProducts]= useState([]);

  useEffect(()=>{


    const getProducts=  async()=>{
      try{
        const data= await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')

        setProducts(data.data)

      } catch(error){
        console.log(error);
      }
    }
    getProducts()
  },[]);

  return (
    <BrowserRouter>
    < Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/products' element={<Products allProducts={products} />} />
      <Route path='/product/:id' element={<ProductInfo/>}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;
