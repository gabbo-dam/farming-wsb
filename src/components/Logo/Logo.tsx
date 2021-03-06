import React from 'react';
import styled from 'styled-components';

import logo from '../../img/WallStreetBetsheader.png';
import Layerx from '../../icons/layerx'

const Logo: React.FC = () => {
  return (
    <StyledLogo>      
      <StyledLink href="/">
        <img src={logo} alt='logo' height="50" style={{ marginTop: -4 }} width='100%'/>
      </StyledLink>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  margin-left: ${(props) => props.theme.spacing[2]}px;
`;

export default Logo;
