import { useEffect, useState } from 'react';

import './TabStyle.css'

export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonContainer = buttonsContainer;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      const handleChange = (event) => {
        setIsMobile(event.matches);
      }; mediaQuery.addListener(handleChange);
      setIsMobile(mediaQuery.matches);
  
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }, []);
  
    const containerStyle = isMobile ? styleMobile : styleContainer;


    return (
      <>
        <ButtonContainer style={containerStyle}>{buttons}</ButtonContainer>
        {children}
      </>
    );
  }
  const styleContainer = {
    display:'flex',
    listStyle:'none',
    justifyContent:'space-between',

  }
  const styleMobile = {
    display:'flex',
    flexDirection:'column',
    listStyle:'none',
    
  }