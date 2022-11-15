import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./App";
import $ from "jQuery";
import Quote from "./Quote";
import QuoteButton from "./QuoteButton";
import Socials from "./Socials";
import "./styles/quote-container.scss";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

function QuoteContainer() {
  const [quote, setQuote] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const useTheme = useContext(ThemeContext);

  function fetchQuote() {
    if (isFetching) return;

    setIsFetching(true);
    setTimeout(() => {
      return $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", (res) => {
        setQuote(res);
        setIsFetching(false);
      }).catch((err) => {});
    }, 2000);
  }

  useEffect(() => {
    // const fetch = fetchQuote();

    return () => {};
  }, []);

  return (
    <div
      className={`card flex-fill flex-grow-0 w-fit w-sm-100 max-w-xl min-w-unset quote-container theme-${useTheme}`}
      id="quote-box"
    >
      <div className="card-body p-5">
        <Quote quote={quote} isFetching={isFetching} />
        <div className="d-flex justify-content-between align-items-center gap-4 gap-sm-5 flex-column-reverse flex-sm-row">
          <Socials quote={quote} />
          <QuoteButton fetchQuote={fetchQuote} />
        </div>
      </div>
    </div>
  );
}

export default QuoteContainer;
