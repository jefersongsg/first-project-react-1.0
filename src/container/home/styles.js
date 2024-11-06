import styled from "styled-components";
import backgoud from "../../assets/background.jpg"


export const Container = styled.div`
  background: url("${backgoud}");
  background-size: cover;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 25px; 
  height:100vh;
`;

export const Image = styled.img`
  margin-top:30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg,
  rgba(255, 255, 255, 0.6) 0.84%,
  rgba(255, 255, 255, 0.6) 0.85%,
  rgba(255, 255, 255, 0.15) 100%
);
  border-radius:61px 61px 30px 30px;
  padding:50px 36px;
  display:flex;
  flex-direction:column;
  height:100vh;
  gap:10px;
`;

export const H1 = styled.h1` 
  font-style:normal;
  font-weight:bold;
  text-align: center;
  color:#ffffff; 
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-weight:bold;
  font-size:18px;
  color:#ffffff;
  border-radius:14px;
  margin-left: 25px;
`;

export const Input = styled.input`
  background:rgba(225,255,255,0.25);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
  height:58px;
  padding-left:25px;
  border:none;
  outline:none;
  font-size:19px;
  color:#ffffff;
`;

export const InputNumber = styled.input`
  background:rgba(225,255,255,0.25);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
  height:58px;
  padding-left:25px;
  border:none;
  outline:none;
  font-size:19px;
  color:#ffffff;
`;

export const Button = styled.button`
  margin-top: 30px;
  height:65px;
  background:rgba(0, 0, 0, 0.8);
  border-radius:14px;
  border: none;
  font-style:normal;
  font-weight:bold;
  font-size:18px;
  color:#ffffff;

  cursor:pointer;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  img {transform:rotate(180deg); }

  &:hover{
    opacity:0.8;
  }
  &:active{
    opacity:0.5;
  }
`






