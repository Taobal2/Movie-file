import React from 'react';
import styled from "styled-components";
import {AiOutlineSetting, AiOutlineHome, AiOutlineFlag, AiFillGithub} from "react-icons/ai";
import {GrGamepad} from "react-icons/gr";
import {ImProfile} from "react-icons/im";
import {CgProfile} from "react-icons/cg";
import {MdTimer} from "react-icons/md";
import {GiFoodTruck, GiUnstableProjectile} from "react-icons/gi"
import image from "../Movie/Warner.jpg";
import {Link} from "react-router-dom"

export const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={image}/>
                <MyLinks>
                    
                    <Links to="/"><AiOutlineHome/></Links>
                    <Links to="/details"><GiFoodTruck/></Links>
                    <Links  ><AiOutlineFlag/></Links>
                    {/* <Links><AiFillGithub/></Links>
                    <Links ><GiUnstableProjectile/></Links>
                    <Links ><MdTimer/></Links>
                    <Links ><ImProfile/></Links>
                    <Links ><GrGamepad/></Links>
                     */}
                    
                </MyLinks>
            </Wrapper>
        </Container>
    )
}




const Container = styled.div`
width:100%;
height:80px;
background-color:#000000;
position:fixed;
z-index:100;
`;
const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center
`;

const Logo = styled.img`
width:150px;
height:70px;
object-fit:cover;
margin-left:20px;
`;

const MyLinks = styled.div`
display:flex;
margin-right:20px;



`;

const Links = styled(Link)`
margin: 0 10px;
text-decoration:none;
width:60px;
height:40px;
border-radius:4px;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
color:${({clr}) => (clr ? "yellow" : "black")};
transition:all 400ms;
transform:scale(1);

:hover{
    background-color:#f2f2f2;
    transform:scale(1.05);
    cursor:pointer;
    color:red;

}
`;