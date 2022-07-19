import styled from "styled-components"

export const NewsletterContainer = styled.div`
    width: 100%;
    height: 500px;
    background-color: #f4f4f4;
    background-image: url("../../../../images/lighting.png");
    background-position-y: 0px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px){
        height: 350px;
        background-size: 26%;
    }

    @media(max-width: 600px){
        height: 300px;
        background-size: 24%;
    }
`

export const NewsLetterContentContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 300px;
    color: #0f1111;

    @media(max-width: 900px){
        margin-left: 20px
    }

    @media(max-width: 600px){
        width: 70%;
        margin-left: 13px;

    }
`

export const Input = styled.input`
    font-size: 0.7rem;
    padding: 14px 3px;
    width: 300px;
    border-radius: 4px;
    background-color: #fff;
    margin-right: 10px;
    border: none;
    outline: none;
    height: 30px;

    @media(max-width: 600px){
       width:200px;
    }
`