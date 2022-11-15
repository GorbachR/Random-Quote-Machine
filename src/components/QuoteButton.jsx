import React from "react";

function QuoteButton({ fetchQuote }) {
  return (
    <button className="btn btn-primary text-nowrap" id="new-quote" onClick={fetchQuote}>
      Load new Quote
    </button>
  );
}

export default QuoteButton;
