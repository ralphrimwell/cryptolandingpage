import FirstSection from "../components/LandingComponents/FirstSection";
import GamesSection from "../components/LandingComponents/GamesSection";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Space = styled.div`
    height: 300px;
`

const Index = () => {
  return (
    <>
      <NavBar />
      <FirstSection/>
      <Space></Space>
      <GamesSection/>
    </>

  )
}

export default Index;
