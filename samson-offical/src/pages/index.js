import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
// , homeObjTwo
import Projects from '../components/Projects';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Projects />
        {/* <InfoSection {...homeObjTwo} /> */}
        <InfoSection {...homeObjThree} />

        </>
    )
}

export default Home;
