import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { services1, services2, services3 } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'


const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <MainSection />
            <Services />
            <InfoSection {...services1}/>
            <InfoSection {...services2}/>
            <InfoSection {...services3}/>
            <Footer />
        </>
    )
}

export default Home
