import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <HighlightedQuote text="This is a test!" author="Test" />
      <Route path={`all-quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
