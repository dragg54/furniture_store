import React from "react";
import {
  Input,
  NewsletterContainer,
  NewsLetterContentContainer,
} from "./StyledNewsletter";

const NewsLetter = () => {
  return (
    <NewsletterContainer>
      <NewsLetterContentContainer>
        <p>Join the Newsletter</p>
        <p>Stay updated on events, collections and exclusive news.</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop:"15px"
          }}
        >
          <Input type="text" placeholder="Your email" />
          <button
            type="submit"
            style={{
              fontSize: "0.7rem",
              width: "80px",
              borderRadius: "4px",
              border: "none",
              backgroundColor:" #ffc304",
              height:"30px"
            }}
          >Subscribe</button>
        </div>
      </NewsLetterContentContainer>
    </NewsletterContainer>
  );
};

export default NewsLetter;
