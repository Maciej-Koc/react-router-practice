import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

export default function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </>
  );
}
