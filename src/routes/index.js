import NavBar from "../components/NavBar";
import { Container, Title, Text, Paper} from '@mantine/core';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/data';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <NavBar />

      {/* <Container> */}
        {/* <HeroSection /> */}
        <InfoSection {...homeObjOne} />
        <Container>
          <Title order= {1}>Built with security in mind</Title>
          <Text>lorem ipsuim adusdhaljdhnbalejdnaljdsnlsjadnl</Text>
        </Container>
        

        <InfoSection {...homeObjTwo} />
        <Footer />
      {/* </Container> */}
    </>

  )
}

export default Index;
