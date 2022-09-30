import styled from "styled-components";

export const NavContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: #171515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 40px;

  @media (max-width: 780px) {
    padding: 0 10px 0 0;
  }
`;

export const NavList = styled.ul`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  opacity: 0.7;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-top: -50px;
  margin-left: -35px
`;

export const CompanyName = styled.h6`
  font-size: 0.6rem;
  margin-top: -70px;
  font-family: "Cairo", sans-serif;
  color: #ffc304; 
`;

export const Img = styled.img`
  height: 150px;
  width: 150px;
`;

export const SearchAndCartContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  opacity: 0.7;

  @media (max-width: 600px) {
    width: 70px;
  }
`
export const Menu = styled.div`
  @media (min-width: 780px){
    display: none
  }
`
