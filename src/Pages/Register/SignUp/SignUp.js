

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUpInputs from "./SignUpInputs";


function Signup() {

  const navigate = useNavigate();


  return (

    <PageContainer>


      <MainTitle>ScoreStore</MainTitle>

      <SignUpInputs></SignUpInputs>

      <ToForward>

      <p           
          onClick={() => {
          navigate('/SignIn');
        }}>Clique aqui e acesse sua conta!</p>

      </ToForward>

    </PageContainer>

  );
}


export default Signup

const PageContainer = styled.div`

  height:660px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: auto;
  background-color: #086b74;

`;

const MainTitle = styled.h1`

color: #black;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 400;
font-size: 80px;
line-height: 50px;
margin-top:100px;
margin-bottom:80px;

`;

const ToForward = styled.p`

color: black;
font-weight: 700;
font-size: 15px;
line-height: 18px;
margin-top:36px;
font-family: 'Bungee', cursive;
text-decoration: underline;
 cursor: pointer;
&:hover {
    color: #800000;

` 