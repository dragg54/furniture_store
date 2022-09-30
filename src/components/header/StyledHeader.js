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
  margin-left: -20px;
  margin-top: -35px;
`;

export const CompanyName = styled.h6`
  font-size: 0.6rem;
  font-family: 'Cairo', sans-serif;
  color:  #ffc304;
  margin-top:-50px
`;

export const Img = styled.img`
  height: 120px;
  width: 120px;
`;

export const SearchAndCartContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  opacity: 0.7;
  font-size: 1.3rem;

  @media (max-width: 600px) {
    width: 70px;
  }
`;

export const CartItemQuantity = styled.p`
  width: 20px;
  height: 20px;
  color: #fff;
  background-color: #ffc304;
  border-radius: 50%;
  position: absolute;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -30%;
  right: -50%
`
export const Menu = styled.div`
  @media(min-width: 780px){
    display: none;
    font-size: 1.4rem
  }
`
