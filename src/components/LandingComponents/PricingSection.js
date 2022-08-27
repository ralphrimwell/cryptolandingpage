import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group, JsonInput } from '@mantine/core';
import styled from "styled-components";
import * as data from './data.json'
import PriceCard from "../PriceCard";

import { MdOutlineMoneyOff } from 'react-icons//md'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 150px;
    background-color: #3c3c3c;
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



const prices = [
  {
    "title": "Standard",
    "price":"$200/mo",
    "features": [
        "this one here",
        "blalalagr"
    ]
  },
  {
    "title": "Premium",
    "price":"$200/mo",
    "features": [
        "this one here",
        "blalalagr"
    ]
  },
  {
    "title": "Professional",
    "price":"$200/mo",
    "features": [
        "this one here",
        "blalalagr"
    ]
  }

  

]



const PricingSection = () => {
    return (
      <>
        <Container>
          <Header>Flexible Pricing</Header>
          <CardsContainer>
            {prices.map((price) => <PriceCard {...price} />)}
          </CardsContainer>
          
        </Container>

      </>
  
    )
  }
  
  export default PricingSection;
  