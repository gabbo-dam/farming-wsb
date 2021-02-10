import React from 'react'
import styled from 'styled-components';
import background from "../../img/background.png";


const Background: React.FC = (props) => {
  return(
  <StyledBackground style={{backgroundImage: `url(${background})`}}> 
    {props.children}
  </StyledBackground>

  )
}

const StyledBackground = styled.div`
  backgroundImage: 'url(${background})'
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default Background