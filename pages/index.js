import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic';
import Corners from '../components/landing/Corners';
import StartButton from '../components/landing/StartButton';


export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["< start game >", "< spectate >", "< contact us >"];

  const onButtonClick = (number) => {
    setActiveButton(number);
  }

  useEffect(() => {
    // window.addEventListener('keydown', chooseButton)
    return () => {
      // window.removeEventListener("keydown", chooseButton);
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Dev Mongolia</title>
        <meta name="keywords" content="Game, development, dev, Mongolia" />
        <meta name="author" content="Bilguudei Baljinnyam" />
        <meta name="description" content="A community to foster game development in Mongolia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.landing_container}>
            <div className={"pt-24 sm:pt-0 container mx-auto px-6 sm:px-8 justify-center align-center flex flex-col"}>
              <div className={"mx-auto z-30 mt-20"}>
                <Image src="/GDM_Website_Landing_Logo.png" alt="gdm logo" width="440px" height="200px" />
              </div>
              <div className={" mt-10 flex flex-col justify-center items-center"}>
                {buttons.map((text, index) => {
                  return <StartButton key={index} index={index} text={text} active={activeButton} onButtonClick={onButtonClick} />
                })}
            </div>
          {/* 4 tops */}
          <Corners className={""} />

        </div>
      </div>

    </div>
  )
}
