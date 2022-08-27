import styled from "styled-components";


const AboutContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 0 150px;
    max-width: 500px;
    

`

const Container = styled.div`
    background-color: #131313;
    height: 75vh;
    display: flex;
    align-items: center;
`

const Description = styled.p`
    color: #bbbbbb;
`

const Header = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 0;
`

const AboutSection = () => {
    return (
      <>
        <Container>
          <AboutContainer>
          <Header>About Cryotrader</Header>
          <Description>Cryotrader is a web based crypto curreny trading bot that automatically chooses the best times
            to sell and buy. {'\n'}

            After logging in, you can configure the bot to your liking then begin. While running it will present you with all the 
            neccessary information requireed to monitor the bot. 
          </Description>
            
          </AboutContainer>
        </Container>


      </>
  
    )
  }
  
  export default AboutSection;
  