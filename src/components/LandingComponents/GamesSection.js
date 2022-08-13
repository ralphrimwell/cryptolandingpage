import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group } from '@mantine/core';
import styled from "styled-components";

const Container = styled.div`
  height: 25vh;
  display: flex;
  justify-content: center;
`

const GamesContainer = styled.div`

  background-color: gray;
  height: 2000px;
  width: 1000px;
`

const SecondSection = () => {
    return (
      <>
        <Container>
          <GamesContainer>

          </GamesContainer>
          
        </Container>

      </>
  
    )
  }
  
  export default SecondSection;
  