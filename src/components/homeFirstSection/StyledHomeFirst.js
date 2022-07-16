import styled from "styled-components"

export const HomeFirstContainer = styled.div`
    height: 550px;
    background: #000;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #0f1111;

    @media(max-width: 780px){
        height: 800px;
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    height: 95%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;

    @media(max-width: 780px){
        width: 100%;
        height: 46%
    }
`

export const HomeFirstSection = styled.div`
    width: 49%;
    height: 95%;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color:#e5e5e5;
    flex-direction: column;

    @media(max-width: 780px){
        width: 100%;
        height: 52%;
        padding: 50px 30px;
    }
    `

export const Img = styled.img`
    width: 100%;
    height: 100%;
`