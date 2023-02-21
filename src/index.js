import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./pages/Members";
import Home from "./pages/Home";
/* import Groups from "./pages/Groups"; */

import Products from "./pages/Products1";
import Category from "./pages/Category";
import NavbarComp from "./Component/Navbar"
import Payment from "./pages/Payment"

import Carts from "./pages/Cart"
import Signin from "./pages/Signin"
import Signinpro from "./pages/Signinpro"

import Dev from "./pages/Devs"

import useToken from './Component/UseToken';

/* function setToken(userToken) {
  console.log('setToken')
  sessionStorage.setItem('token', JSON.stringify(userToken.data));
}

function getToken() {
  console.log('getToken')
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
 */

export default function App() {

  console.log('App')
  const { token, setToken } = useToken();

  /* if (!token) {
    return <Signin setToken={setToken} />
  } */

  return (
    <>
      
      <BrowserRouter>
      <NavbarComp />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="category" element={<Category />} />
            <Route path="carts" element={<Carts />} />
            <Route path="checkout" element={<Payment />} />
            <Route path="signin" element={<Signin />} />
            <Route path="dev" element={<Dev />} />
            <Route path="signinpro" element={<Signinpro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


