import styled from "styled-components"

export const ItemSectionContainer = styled.div `
    width: 100%;
    height: 600px;
    display: flex;
    background-color:  #f4f4f4;

    
    @media(max-width: 780px){
        flex-direction: column;
        height: 1000px;
    }

    @media(max-width: 600px){
        flex-direction: column;
        height: 800px;
        padding-bottom: 30px
    }

`

export const ItemImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;

    @media(max-width: 780px){
       width: 100%
    }

    @media(max-width: 600px){
       height: 40%
    }
`

export const ItemContentContainer = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: space-around;

    @media(max-width: 900px){
        padding: 40px 20px
    }

    @media(max-width: 780px){
       width: 100%
    }

    @media(max-width: 600px){
        padding: 40px 10px;
        height: 60%
    }

`

export const DiscountContainer = styled.div`
    width: 400px;
    height: 100px;
    background-color:  #171515;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    box-shadow: 2px 2px 2px  #171515;

    @media(max-width: 600px){
        width: 350px
    }
`

export const AddToCartButton = styled.button`
    width: 400px;
    height: 50px;
    background-color: #ffc304;
    border: none;
    font-weight: 600;

    @media(max-width: 900px){
        width: 300px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%
`