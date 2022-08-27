import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group, JsonInput } from '@mantine/core';
import styled from "styled-components";
import Card from "../Card";
import * as data from './data.json'

import { MdOutlineMoneyOff } from 'react-icons//md'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 150px;
  
`

const CardsContainer = styled.div`
  display: inline-flex;
  /* max-width: 1200px; */
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  justify-content: center;
  
`

const Header = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: white;
    text-align: center;

`


const features = [
  {
    "title": "0% Deposit fee",
    "description": "We don't take any fees on your trades!",
    "icon": <MdOutlineMoneyOff size={30} color="white"/>
  },
  {
    "title": "0% Deposit fee",
    "description": "We don't take any fees on your trades!",
    "icon": <MdOutlineMoneyOff size={30} color="white"/>
  },
  {
    "title": "0% Deposit fee",
    "description": "We don't take any fees on your trades!",
    "icon": <MdOutlineMoneyOff size={30} color="white"/>
  },

]


  



const FeaturesSection = () => {
    return (
      <>
        <Container>
          <Header>Make your money work for you</Header>
          <CardsContainer>
            {features.map((card) => <Card {...card} />)}
          </CardsContainer>
          
        </Container>

      </>
  
    )
  }
  
  export default FeaturesSection;
  