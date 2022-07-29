import styled from "styled-components"

export const ItemsSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ItemList = styled.div`
    width: 65%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`
export const ItemsWrapper = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns:repeat(4,1fr); 
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 25px;
    align-content: center;

    @media(max-width: 1080px){
        width: 75%
    }

    
    @media(max-width: 900px){
        width: 85%
    }

    @media(max-width: 780px){
        width: 92%;
    }

    @media(max-width: 600px){
        width: 95%
    }

    
    @media(max-width: 480px){
        width: 92%;
        grid-template-columns:repeat(2,1fr); 
        grid-gap: 20px;
    }
`
export const ItemsContainer = styled.div`
    height: 350px;

    
    @media(max-width: 780px){
        height: 300px;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: contain;
`

export const ItemDetailsContainer = styled.div`
    width: 100%;
    height: 30%;
    margin-top: 4px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`