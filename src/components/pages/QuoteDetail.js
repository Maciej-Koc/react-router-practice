import { useParams, Route } from "react-router-dom";

import Comments from "../comments/Comments";

export default function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
