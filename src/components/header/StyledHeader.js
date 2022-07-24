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
  justify-content: center;
  align-items: center;
  height: 100%
`;

export const CompanyName = styled.h6`
  font-size: 0.6rem;
  margin-top: -30px;
  font-family: Indie Flower;
  color:  #ffc304;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
`;

export const SearchAndCartContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  opacity: 0.7;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    width: 100px;
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
