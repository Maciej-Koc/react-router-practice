import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "Max",
    text: "Learning react is great",
  },
  {
    id: "2",
    author: "Moo",
    text: "Learning react is ...",
  },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
