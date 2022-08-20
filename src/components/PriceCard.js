import FirstSection from "../components/LandingComponents/FirstSection";
import GamesSection from "./LandingComponents/FeaturesSection";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Button, Header } from '@mantine/core';
import { Space } from '@mantine/core';

const Container = styled.div`
  border: 1px solid red;
  width: 340px;
  height: 350px;
  padding: 30px;
  box-sizing:border-box;
  border-radius: 20px;
    display: flex;
    flex-direction: column;
    

`

const Title = styled.h2`
  color: black;
  font-size: 15px;
  font-weight: normal;
`

const Price = styled.h2`
    color: white;
    font-size: 22px;
    margin: 0px;
`

const FeatureList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    flex-direction: column;
    list-style-type: "🤯";
    list-style-position:inside



`

const FeatureListItem = styled.li`
    color: white;

`

const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 14px;
  margin-right: 20px;
  background-color: #911c95;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const Icon = (props) => {
  return(
    <IconContainer>
      {props.icon}
    </IconContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;

`






const PriceCard = (props) => {
  return (
    <>
        <Container>
            <HeaderContainer>
                <Icon>{props.icon}</Icon>
                <div>
                <Title>{props.title}</Title>
                <Price>{props.price}</Price>  
                </div>

            </HeaderContainer>

            <FeatureList>
                {props.features.map((feature) => <FeatureListItem>{feature}</FeatureListItem>)}
            </FeatureList>
                <Button style={{marginTop: "auto"}}>Purchase</Button>

        </Container>
    </>

  )
}

export default PriceCard;
