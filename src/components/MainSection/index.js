import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import {
    BgImage,
    Container,
    Heading,
    Description,
    BtnWrapper,
    ArrowForward,
    ArrowRight
} from "./MainElement";

const MainSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <BgImage id="home">
                <Container>
                    <Heading>Home Build</Heading>
                    <Description>Home Build is a global, publicly-traded engineering, procurement, construction (EPC) and maintenance company. We work with clients in diverse industries around the world to design, construct and maintain their capital projects.</Description>
                    <BtnWrapper>
                        <Button 
                            to="services"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            Our Services {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </BtnWrapper>
                </Container>
            </BgImage>
        </>
    )
}

export default MainSection
