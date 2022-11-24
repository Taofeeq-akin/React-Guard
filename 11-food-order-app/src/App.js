import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClear={hideCartHandler} />}
      <Header onShow={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
