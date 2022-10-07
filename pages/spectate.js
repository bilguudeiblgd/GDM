import React, { useCallback, useRef, useEffect, useState } from 'react'
import styles from '../styles/spectate.module.css';

import RoadMapBox from '../components/RoadMapBox';
import SpectateLanding from '../components/SpectateLanding';
import SectionTitle from '../components/SectionTitle';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Loading from '../components/Loading';
const Spectate = () => {
  const roadMapRef = useRef();
  const textRef = useRef();

  return (
    <div className={"relative px-6"}>
      <div className={" relative h-screen flex flex-col justify-center items-center"}>
        <SpectateLanding />
      </div>
      <div>
        <SectionTitle text="< ABOUT GDM >" />
        <article>
          <AboutSection/>
        </article>
      </div>
      <div className={"mt-32"}>
        <SectionTitle text={"< WHAT WE DO >"} />
        <RoadMapBox />
      </div>
      <div className={"mt-32 pb-32"}>
        <SectionTitle text={"< CONTACTS >"}/>
        <ContactSection />
      </div>
      
    </div>

  )
}



export default Spectate