import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group, Space } from '@mantine/core';
import styled from "styled-components";
import image from "../../images/nobg.png";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    text-align: left;
    display: flex;
    height: 100vh;
    display: flex;
    justify-content: center;

    flex-direction: column;
    max-width: 600px;
    padding: 0 150px;
`


const Header = styled.h1`
    font-weight: bold;
    font-size: 70px;
    color: white;
    margin-bottom: 0.25em;

`

const Description = styled.p`
    color: #bbbbbb;
`

const Character = styled.div`
    position:absolute;
    background-image: linear-gradient(to 10%, transparent 85%, #000000 100%), url(${image});
    z-index: -1;
    width: 100%;
    height: 100%;
`


const FirstSection = () => {
    return (
        <>
            <Character />
                <Container>
                    <Header>The number one crypto trading bot</Header>
                    <Description>Cryotrader is a fully automated cryptocurrency trading bot, designed to maximize profits while maintaining reliability</Description>
                    <Space h="md" />

                    <div style={{ display: 'flex' }}>
                        <Button width onClickmt="md" component={Link} to="/servers" >
                            Get Started
                        </Button>
                        <Space w="xs" />

                        <Button width onClickmt="md" variant="outline" >
                            Pricing
                        </Button>
                    </div>

                </Container>

        </>

    )
}

export default FirstSection;
