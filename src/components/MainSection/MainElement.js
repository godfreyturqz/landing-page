import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import imgSrc from "./main-photo.jpg"

export const BgImage = styled.div`
    background-image: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5)), url(${imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    /* filter: brightness(70%); */
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Heading = styled.h1`
    color: #FFF;
    font-size: 48px;
    position: relative;
    top: 25%;
    
    padding-left: 20px;
    border-left: 10px solid #ffb400;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Description = styled.p`
    position: relative;
    top: 25%;
    color: #FFF;
    line-height: 1.6;
    max-width: 500px;
    padding-top: 25px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const BtnWrapper = styled.div`
    position: relative;
    top: 25%;
    margin-top: 32px;
    max-width: 200px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`