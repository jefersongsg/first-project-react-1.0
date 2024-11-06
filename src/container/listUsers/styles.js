
import styled from "styled-components";
import backgoud from "../../assets/bg image.svg"


export const Container = styled.div`
  background: url("${backgoud}");
  background-size: cover;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 25px; 
  height:200%;
`;

export const Image = styled.img`
  margin-top:40px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg,
  rgba(255, 255, 255, 0.6) 0.84%,
  rgba(255, 255, 255, 0.6) 0.85%,
  rgba(255, 255, 255, 0.15) 100%
);
  backdrop-filter:blur(45px);
  border-radius:61px 61px 30px 30px;
  padding:20px 27px;
  display:flex;
  flex-direction:column;
  gap:10px;
  height:100vh;
`;

export const H1 = styled.h1` 
  font-style:normal;
  font-weight:bold;
  text-align: center;
  color:#ffffff;
`;

export const Button = styled.button` 
  width: 262px;
  height:58px;
  background: transparent;
  border-radius:14px;
  border:1px solid #ffffff;
  backdrop-filter:blur(10px);
  font-style:normal;
  font-weight:bold;
  font-size:18px;
  color:#ffffff;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  &:hover{
    opacity:0.8;
  }
  &:active{
    opacity:0.5;
  }
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  gap:20px
`;

export const CardUsers = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  gap:15px;
  background:rgba(225,255,255,0.25);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
  width:262px;
  height:58px;
  border:none;
  outline:none;
p {
  font-weight:bold;
  font-size:20px;
  line-height:28px;
  color:#ffffffff;
}
button{
  background:none ;
  border:none ;
  cursor:pointer;
}
`