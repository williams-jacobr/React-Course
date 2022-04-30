import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [{ id: "q1", author: "TEST", text: 'This is a test' }];

const AllQuotes = () => {
  return (
    <section>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </section>
  );
};

export default AllQuotes;
