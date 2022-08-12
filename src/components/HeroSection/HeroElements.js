import styled from "styled-components";


export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height:800px;
    position: relative;
    z-index: 1;
    
`

// export const HeroBg = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroP = styled.div`
    margin-top: 24px;
    color: #000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`