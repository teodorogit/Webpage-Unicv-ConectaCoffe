import React from 'react'
import coffeCup from '../assets/coffe-cup.svg'
import '../global.css'
import Examples from './Exemplos/Exemplos.js';
import fundoUnicv from '../assets/fundounicv.png'


import {
    Container,
    Image,
    Cards,
    SubContainer,
    MainContent
} from './Styles.jsx'

const Header = () => {
  return (
    <div>
        <Container>
            <div>
                <Image src={fundoUnicv} alt="fundo-logo-unicv"/>
            </div>
            <div>
                <Image src={coffeCup} alt="coffe-cup" />
             </div>
            
        </Container>
        <MainContent>
        <SubContainer>
                <Cards>
                    <Examples/>
                </Cards>
        </SubContainer>
        </MainContent>
      
    </div>
  )
}

export default Header
