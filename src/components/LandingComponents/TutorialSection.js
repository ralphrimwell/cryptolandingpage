import styled from "styled-components";


const StepContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: center;
    margin: 50px 0;
    :nth-child(odd) {
      flex-direction: row-reverse;
      text-align: right;
    }
`

const Container = styled.div`
    background-color: #131313;
    display: flex;
    flex-direction: column;
    padding: 0 150px;

`

const StepTextContainer = styled.div`
    max-width: 500px;
    gap: 20px;
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

const Placeholderimg = styled.div`
  background-color: blueviolet;
  height: 400px;
  width: 700px;
`

const steps = [
  {
    "header": "Step 1",
    "description": "We don't take any fees on your trades!",
    "image": "path"
  },
  {
    "header": "Step 2",
    "description": "We don't take any fees on your trades!",
    "image": "path"
  },
  {
    "header": "Step 3",
    "description": "We don't take any fees on your trades!",
    "image": "path"
  }

]

const Step = (props) => {
  return (
    <>
     <StepContainer>
          <StepTextContainer>
            <Header>{props.header}</Header>
            <Description>{props.description}</Description>
          </StepTextContainer>
          <Placeholderimg />
        </StepContainer>
    </>
  )
}

const AboutSection = () => {
  return (
    <>
      <Container>
        <Header>Easy and intuitive</Header>
        {steps.map((step) => <Step {...step} />)}
      </Container>


    </>

  )
}

export default AboutSection;
