import React from 'react'
import styled from 'styled-components'
import TitleTextButtom from '../TitleTextButtom/'
import Img from '../Img'
import Features from '../Features'

import wsblanding from '../../../../img/wsblanding.png'
import background from '../../../../img/bgwsb1.png'
import mobilebackground from '../../../../img/mobilebackground.png'

const Hero: React.FC = () => {

  return (
    <>
      <StyledHero> 
      <Container>
        <Grid>
          <TitleTextButtom 
          title='WallStreetBets Token (WSB)'
          text='The WSB movement for financial democracy started on reddit and it became a global phenomenon. This is why decided to create a token to give our community a tool to grow their personal assets by farming the WSB token.'
          button='GO TO APP' 
          src='/farm'
          />
          <StyledGrid>

          <Img src={wsblanding}/>
          </StyledGrid>
          <Features />
        </Grid>
      </Container>
      </StyledHero>

    </>
  );
};

const StyledHero = styled.div`
background-image: url(${background});
background-size: cover;
background-position: bottom center;
background-repeat: no-repeat;
@media (max-width: 768px) {
  background-image: url(${mobilebackground});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
}
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const StyledGrid = styled.div`
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin: 20px 0 50px 0;
  }
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 120px 0 0 0;
  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`


export default Hero;
