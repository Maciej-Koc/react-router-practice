import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

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

export default function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found! :(</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
