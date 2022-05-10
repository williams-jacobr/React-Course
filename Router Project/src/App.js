import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddAQuote = React.lazy(() => import("./pages/AddAQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/add-a-quote">
            <AddAQuote />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
