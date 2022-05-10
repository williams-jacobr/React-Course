import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

import { useParams, Route, useRouteMatch, Link } from "react-router-dom";
import { Fragment } from "react";

const DUMMY_QUOTES = [
  { id: "q1", author: "TEST", text: "This is a test" },
  { id: "q2", author: "Max", text: "Learning React is fun" },
];

const QuoteDetail = () => {
  const { path, url } = useRouteMatch();
  const params = useParams();

  const curQuote = DUMMY_QUOTES.find((quote) => quote.id === params.id);

  if (!curQuote) {
    return <p>No quote found :(</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={curQuote.text} author={curQuote.author} />
      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
