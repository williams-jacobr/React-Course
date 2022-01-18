import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
