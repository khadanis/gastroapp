import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    HeroContainer,  
    HeroBG, 
    VideoBG,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] =useState(false);

    const onHover= () => {
        setHover(!hover);
    };

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type='video/mp4' /> 
      </HeroBG>
      <HeroContent> 
        <HeroH1>Les rapports sont devenus plus faciles</HeroH1>
        <HeroP>Facilite le reportage pour le docteur et assure un bon service et des résultats détaillées pour le patient</HeroP>
        <HeroBtnWrapper>
          <Button to='PDF' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Générer le Rapport {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>  
    </HeroContainer>
  );
};

export default HeroSection