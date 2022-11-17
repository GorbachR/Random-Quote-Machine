import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/brands.css";
import { ThemeContext } from "./App";
import "./styles/socials.scss";

function Socials({ quote }) {
  const useTheme = useContext(ThemeContext);
  return (
    <div>
      <a
        className="d-inline-block"
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${
          quote ? `${encodeURIComponent(quote.quote)}%0A-${encodeURIComponent(quote.author)}` : ""
        }`}
        title="Share on Twitter"
      >
        <i
          className={`fa-brands fa-twitter fa-2x pe-none theme-${useTheme}`}
          title="Twitter Logo"
        ></i>
      </a>
    </div>
  );
}

export default Socials;
