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
          <input
            type="submit"
            value="Subscribe"
            style={{
              fontSize: "0.7rem",
              width: "80px",
              borderRadius: "4px",
              border: "none",
              backgroundColor:" #ffc304",
              height:"30px"
            }}
          />
        </div>
      </NewsLetterContentContainer>
    </NewsletterContainer>
  );
};

export default NewsLetter;
