import FirstSection from "../components/LandingComponents/FirstSection";
import GamesSection from "../components/LandingComponents/GamesSection";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import AboutSection from "../components/LandingComponents/AboutSection";

const Space = styled.div`
    height: 200px;
`

const Index = () => {
  return (
    <>
      <NavBar />
      <FirstSection/>
      <Space></Space>
      <AboutSection/>
      <GamesSection/>
    </>

  )
}

export default Index;
