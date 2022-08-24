
import React, { useCallback, useRef, useEffect, useState } from 'react'

import TitleText from '../components/TitleText';
import Wrapper from '../components/Wrapper';
import styles from '../styles/spectate.module.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

import gsap from 'gsap';
import RoadMapBox from '../components/RoadMapBox';
import SpectateLanding from '../components/SpectateLanding';
const Spectate = () => {
  let textRef = useRef();

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
  }, []);
  useEffect(() => {
    //add eventlistener to window
    AOS.init();
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
          <SpectateLanding/>
      </div>
      <div>
        <h2 className={"text-6xl font-title font-normal text-white text-center"}><span className={`text-transparent ${styles.stroke_text}`}>ABOUT</span>ABOUT GDM<span className={`text-transparent ${styles.stroke_text}`}>GDM</span></h2>
        <article>
          <div className={"w-96 mx-auto mt-16"}>
            <Typewriter options={{
              autoStart: true,
              delay: 20,
            }} onInit={(typewriter) => {
              typewriter.typeString(`<span class="text-white text-xl">Game dev mongolia is a community that</span>`).start();
            }} />
            <p data-aos="fade-right" ref={textRef} className={"uppercase mt-5 mb-3 text-3xl textgame text-prim-green"}>{">"} Host game events</p>
            <p data-aos="fade-right" ref={textRef} className={"uppercase mb-3 text-3xl textgame text-prim-blue"}>{">"} provides networking opportunities</p>
            <p data-aos="fade-right" ref={textRef} className={"uppercase mb-8 text-3xl textgame text-prim-purple"}>{">"} offers resources</p>
            <Typewriter options={{
              autoStart: true,
              delay: 20,
            }} onInit={(typewriter) => {
              typewriter.typeString(`<span class="text-white text-xl">for game
              developers in mongolia.</span>`).start();
            }} />

          </div>
        </article>
      </div>
      <div className={"mt-32"}>
        <h2 className={"text-6xl font-title font-normal text-white text-center"}><span className={`text-transparent ${styles.stroke_text}`}></span>ROAD MAP<span className={`text-transparent ${styles.stroke_text}`}></span></h2>
        <div className={"container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto px-4 mt-10"}>
          <RoadMapBox />
        </div>
      </div>
      <div className={"mt-32"}>
          <h2>JOIN OUR DISCORD</h2>
      </div>
      <div className={"w-full h-screen"}></div>
    </div>

  )
}



export default Spectate