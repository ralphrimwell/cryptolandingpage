import FirstSection from "../components/LandingComponents/FirstSection";
import GamesSection from "./LandingComponents/FeaturesSection";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { IconContext } from "react-icons";

const Container = styled.div`
  border: 1px solid red;
  width: 340px;
  height: 200px;
  padding: 30px;
  box-sizing:border-box;
  border-radius: 20px;
`

const Title = styled.h2`
  color: white;
`

const Description = styled.a`
  color: white;
  opacity: 0.8;
`

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 14px;
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

const Card = (props) => {
  return (
    <>
        <Container>
            <Icon icon={props.icon} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Container>
    </>

  )
}

export default Card;
