import React from 'react'
import Icon1 from "../../images/engineering.svg";
import Icon2 from "../../images/procurement.svg";
import Icon3 from "../../images/construction.svg";
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
 } from "./ServicesElements";

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Engineering</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Procurement</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Construction</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
