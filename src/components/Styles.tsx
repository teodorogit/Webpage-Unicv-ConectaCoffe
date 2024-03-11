import styled from'styled-components'

export const Container = styled.div`
display:flex;
max-width:1300px;
margin:0 auto;
justify-content:space-between;
> div {
    display:flex;
}
@media (max-width:600px){
flex-direction:column;
align-items:center;
}

`;
export const Image = styled.img`
width:30vw;
`;
export const Cards = styled.div`
display:flex;`

export const SubContainer = styled.div`
display:flex;
flex-direction:column;
max-width:100rem;
margin:0 auto;
`
export const MainContent= styled.div`

`;