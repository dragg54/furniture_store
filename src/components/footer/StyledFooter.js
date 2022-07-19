import styled from "styled-components"

export const FooterContainer = styled.div`
    height: 600px;
    width: 100%;
    background-color: #171515;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #e5e5e5;
    line-height: 32px;

    @media(max-width: 900px){
        height: 500px;
    }


    @media(max-width: 600px){
        height: 800px;
    }
`

export const FooterContentContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media(max-width: 900px){
        width: 80%
    }

    @media(max-width: 600px){
        flex-direction: column;
        justify-content:space-evenly;
        height: 100%;
    }
`
export const HelpContainer = styled.div`
    
`

export const InformationContainer = styled.div`

`

export const ContactContainer = styled.div`

`

export const IconsContainer = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`