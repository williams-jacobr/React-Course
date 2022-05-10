import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddAQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <section>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </section>
  );
};

export default AddAQuote;
