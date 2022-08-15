import FirstSection from "../components/LandingComponents/FirstSection";
import GamesSection from "../components/LandingComponents/GamesSection";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 300px;
  height: 350px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  padding: 30px;
  box-sizing:border-box;
  border-radius: 20px;
  margin: 10px;
`

const Title = styled.h2`
  color: white;
`

const Description = styled.a`
  color: white;
  opacity: 0.6;
`

const Server = (props) => {
  return (
    <>
        <Container>
            <Title>{props.name}</Title>
            <Description>{props.description}</Description>
        </Container>
    </>

  )
}

export default Server;
