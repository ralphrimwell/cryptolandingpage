import FirstSection from "../components/LandingComponents/FirstSection";
import FeaturesSection from "../components/LandingComponents/FeaturesSection";
import styled from "styled-components";
import AboutSection from "../components/LandingComponents/AboutSection";
import PricingSecion from "../components/LandingComponents/PricingSection";

const Space = styled.div`
    height: 200px;
`

const padding = styled.div`
  padding: 0 150px;
`

const Circle = styled.div`
  background-color: #b3ff00;
  height: ${props => props.height};
  width: ${props => props.width};
  position: absolute;
  z-index: -2;
  filter: brightness(20);
  filter: blur(100px);
  border-radius: 50%;

`

const Landing = () => {
  return (
    <>
      <Circle width="500px" height="500px"/>
      
      <FirstSection/>
      <AboutSection/>
      <FeaturesSection/>
      <PricingSecion/>
    </>

  )
}

export default Landing;
