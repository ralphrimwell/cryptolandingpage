import styled from "styled-components";
import image from "../../images/nobg.png"; 

export const FormContainer = styled.div`
    max-width: 500px;
    margin: 0px 45px 0px;
    height: 550px;
    flex-grow: 1;
    padding: 0px 30px 0px;
`

export const imagecover = styled.img`
background-image: url(https://ui-cdn.digitalocean.com/registration/565b0d2/static/media/serverless-bg.0dfa2d2….svg);
    background-position: center center;
    background-color: rgb(245, 249, 255);
    background-size: cover;
`

export const SplitScreen = styled.div`
    display: flex;
    flex-direction: row;
`
export const LeftSide = styled.div`
    height: 100vh;
    width: 55%;
    display: flex;
    justify-content: center;

    align-items: center;
    text-align: center;
    background-color: blue;
    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const RightSide = styled.div`
    height: 100vh;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const FormTitle = styled.h1`
    color: white;
`