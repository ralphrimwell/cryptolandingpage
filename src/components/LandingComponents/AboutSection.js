import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group } from '@mantine/core';
import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
    text-align: left;
    max-width: 500px;
    
`


const Description = styled.p`
    color: #bbbbbb;
`

const Header = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: white;
`

const AboutSection = () => {
    return (
      <>

        <Container>
        <Header>About Cryotrader</Header>
          <Description>Cryotrader is a fully automated cryptocurrency trading bot, designed to maximize profits while maintaining reliability</Description>
          
        </Container>

      </>
  
    )
  }
  
  export default AboutSection;
  