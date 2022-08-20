import styled from "styled-components";


export const Container = styled.div`
    text-align: left;
    display: flex;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 150px;
    background-color: #131313;
    height: 30vh;
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

const StepSection = styled.div`
    height: 25vh;
`

const TutorialSection = () => {
    return (
      <>

        <Container>
        <Header>About Cryotrader</Header>
        <Description>Cryotrader is a web based crypto curreny trading bot that automatically chooses the best times
          to sell and buy. {'\n'}

          After logging in, you can configure the bot to your liking then begin. While running it will present you with all the 
          neccessary information requireed to monitor the bot. 
        </Description>
          
        </Container>

      </>
  
    )
  }
  
  export default TutorialSection;
  