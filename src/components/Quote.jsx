import React, { useContext } from "react";
import { ThemeContext } from "./App";
import Loading from "./Loading";
import "@fortawesome/fontawesome-free/css/solid.css";
import "./styles/quote.scss";

function Quote({ quote }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="mx-auto mb-5 w-fit">
      {quote ? (
        <figure className="text-center">
          <blockquote className="blockquote" id="text">
            <i className={`fa-solid fa-quote-left me-1 theme-${theme} quotes`}></i>
            <p className={`quotes-apply quotes-open-quote d-inline theme-${theme} block-quote`}>
              {quote.quote}
            </p>
            <i className={`fa-solid fa-quote-right ms-1 theme-${theme} quotes `}></i>
          </blockquote>
          <figcaption className={`blockquote-footer pt-2 theme-${theme} author`} id="author">
            {quote.author}
          </figcaption>
        </figure>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Quote;
