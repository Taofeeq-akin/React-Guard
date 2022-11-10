import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && (
        <Cart onClear={hideCartHandler} />
      )}
      <Header onShow={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
