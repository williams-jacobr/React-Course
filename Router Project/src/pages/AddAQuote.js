import QuoteForm from "../components/quotes/QuoteForm";

const AddAQuote = () => {
  const addQuoteHandler = () => {};

  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} isLoading="false" />
    </section>
  );
};

export default AddAQuote;
