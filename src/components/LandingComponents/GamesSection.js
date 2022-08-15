import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group } from '@mantine/core';
import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GamesContainer = styled.div`
  padding: 20px;
  background-color: blue;
  height: 2000px;
  width: 1000px;
  display: flex;
  justify-content: center;
  
`

const Header = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: white;
`

const SecondSection = () => {
    return (
      <>

        <Container>
        <Header>What features do we provide?</Header>

          <GamesContainer>
            <Card name='gwewge'/>
            <Card name='willy'/>

          </GamesContainer>
          
        </Container>

      </>
  
    )
  }
  
  export default SecondSection;
  