import styled from "styled-components"
import { keyframes } from "styled-components"

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e5e4e5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Loader = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

export const LoaderContainer = styled.div`
    animation: ${Loader} linear 1s infinite;
`