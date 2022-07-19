import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 550px;
  width: 100%;
  background-color: #171515;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e5e5e5;
  line-height: 32px;

  @media (max-width: 900px) {
    height: 450px;
  }

  @media (max-width: 600px) {
    height: 800px;
  }
`;

export const FooterContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    margin-top: -20px;
    align-items: flex-start;
  }
`;
export const HelpContainer = styled.div``;

export const InformationContainer = styled.div``;

export const ContactContainer = styled.div``;

export const IconsContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 76%;

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    height: 95%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
