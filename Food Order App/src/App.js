import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHander = function () {
    setCartShown(true);
  };

  const hideCartHandler = function () {
    setCartShown(false);
  };

  return (
    <React.Fragment>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
