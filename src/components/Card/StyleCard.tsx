import styled from "styled-components";

export const CardComponent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
border:2px solid #DDCDAC;
  padding:10px;
  width:8vw;
  height:7vw;
  border-radius:100px;
  cursor:pointer;
&:hover {
    background-color:#98392691;
}
@media (max-width:600px){
  width:160px;
  height:80px;
  margin-left:50%;
  transform:translateX(-50%)
}
`;