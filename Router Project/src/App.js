import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AddAQuote from "./pages/AddAQuote";
import AllQuotes from "./pages/AllQuotes";

import classes from "./components/layout/Layout.module.css";
import QuoteDetail from "./pages/QuoteDetail";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path="/all-quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/add-a-quote">
            <AddAQuote />
          </Route>
          <Route path="/all-quotes/:id">
            <QuoteDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
