import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons";

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p>
       <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
       </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Genelsis</span> 👋
            <br />
            A Front End Web Developer who wants to create Websites for you.
            </h1>
    ),
    2: (
        <InfoBox 
          text= "Studied Web Development and work as a Game Developer on previous Job."
          link="/about"
          btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
          text= "Created some amazing websites that showcases what I learn as I studied Front End Web Development."
          link="/projects"
          btnText="Vist my portfolio"
      />
    ),
    4: (
        <InfoBox 
          text= "Need a Website for your Business or looking for a Front End Website Developer? I'm just a few keystrokes away"
          link="/contact"
          btnText="Lets talk"
      />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;
}
export default HomeInfo