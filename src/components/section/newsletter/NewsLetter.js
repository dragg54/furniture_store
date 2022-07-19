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
            height: "50px",
          }}
        >
          <Input type="text" placeholder="Your email" />
          <input
            type="submit"
            value="Subscribe"
            style={{
              fontSize: "0.7rem",
              padding: "0px 3px",
              borderRadius: "4px",
              border: "none",
              height: "34px",
              backgroundColor:" #ffc304"
            }}
          />
        </div>
      </NewsLetterContentContainer>
    </NewsletterContainer>
  );
};

export default NewsLetter;
