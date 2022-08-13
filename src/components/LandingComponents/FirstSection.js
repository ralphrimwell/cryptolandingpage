import { SplitScreen, LeftSide, RightSide, FormContainer } from "../Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group, Space } from '@mantine/core';
import styled from "styled-components";
import image from "../../images/nobg.png"; 

const Header = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: white;
`

const Description = styled.p`
    color: #bbbbbb;
`

const Character = styled.img`
    position:absolute;
    background-image: linear-gradient(to bottom, transparent 85%, #000000 95%), url(${image});
    z-index: -1;
`


const FirstSection = () => {
    return (
      <>
  <Character src={image} />

  <SplitScreen>

            <FormContainer>
            <Header>A global network of gaming servers</Header>
            <Description>We provide a fun and polished gaming experience for multiple platforms, including Rust and Minecraft.</Description>
            <Space h="md" />

            <div style={{ display: 'flex' }}>
                <Button  width onClickmt="md"   >
                Browse Our Servers
                </Button>
                <Space w="xs" />

                <Button  width onClickmt="md"  variant="outline" >
                Donate
                </Button>
            </div>
         
            </FormContainer>
      </SplitScreen>

      </>
  
    )
  }
  
  export default FirstSection;
  