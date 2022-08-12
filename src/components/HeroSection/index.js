import React from 'react';
import {HeroContainer, HeroContent, HeroP, HeroBtnWrapper} from './HeroElements';
import { Button } from '@mantine/core';

const HeroElements = () => {
  return (
    <HeroContainer>
        <HeroContent>
          
            <HeroP>
               daaejdanedlja
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup">
                    get started 
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroElements