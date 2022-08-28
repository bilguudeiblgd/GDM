import React, { useCallback, useRef, useEffect, useState } from 'react'
import styles from '../styles/spectate.module.css';

import RoadMapBox from '../components/RoadMapBox';
import SpectateLanding from '../components/SpectateLanding';
import SectionTitle from '../components/SectionTitle';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
const Spectate = () => {
  const roadMapRef = useRef();
  const textRef = useRef();
  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }

  }, []);

  return (
    <div className={"text-red-400 relative z-10"}>
      <div id="shard-con">
      </div>
      <div className={"w-full h-screen flex flex-col justify-center items-center"}>
        <SpectateLanding />
      </div>
      <div>
        <SectionTitle text="< ABOUT GDM >" />
        <article>
          <AboutSection/>
        </article>
      </div>
      <div className={"mt-32"}>
        <SectionTitle text={"< ROAD MAP >"} />
        <RoadMapBox />
      </div>
      <div className={"mt-32"}>
        <SectionTitle text={"< CONTACTS >"}/>
        <ContactSection/>
      </div>
      <div className={"w-full h-screen"}></div>
    </div>

  )
}



export default Spectate