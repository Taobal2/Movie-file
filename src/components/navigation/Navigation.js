import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineFlag } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
import image from "../../assets/Warner.jpg";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={image} />
        <MyLinks>
          <Links to="/">
            <AiOutlineHome />
          </Links>
          <Links>
            <GiFoodTruck />
          </Links>
          <Links>
            <AiOutlineFlag />
          </Links>
        </MyLinks>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  position: fixed;
  z-index: 100;
  box-shadow: 0 0 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 70px;
  object-fit: cover;
  margin-left: 20px;
`;

const MyLinks = styled.div`
  display: flex;
  margin-right: 20px;
`;

const Links = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  width: 60px;
  height: 40px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ clr }) => (clr ? "yellow" : "black")};
  transition: all 400ms;
  transform: scale(1);

  :hover {
    background-color: #f2f2f2;
    transform: scale(1.05);
    cursor: pointer;
    color: red;
  }
`;
