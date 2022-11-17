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
    return $.ajax({
      dataType: "json",
      url: "http://localhost:8081",
      success: (res) => {
        setQuote(res);
        setIsFetching(false);
      },
      error: (err) => {},
    });
  }

  useEffect(() => {
    const initialFetch = fetchQuote();

    return () => {
      initialFetch.abort();
    };
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
