import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProductsData from './ProductsData'
import Cart from './Cart'
import Navigation from './Navigation'
import NotFound from './NotFound'
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<ProductsData/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;