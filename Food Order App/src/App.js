import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHander = function () {
    setCartShown(true);
  };

  const hideCartHandler = function () {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
