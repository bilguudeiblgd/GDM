import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic';
import Corners from '../components/landing/Corners';
import StartButton from '../components/landing/StartButton';


export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["start game", "spectate", "contact us"];

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.landing_container}>
        <div className={styles.landing_background_glow}>
          <div className={[styles.landing_background_shards]}>
            <div className={"container mx-auto justify-center align-center flex flex-col"}>
              <div className={"mx-auto mt-20"}>
                <Image src="/GDM_Website_Landing_Logo.png" alt="gdm logo" width="440px" height="200px" />
              </div>
              <div className={"text-center mt-10 flex flex-col"}>
                {buttons.map((text, index) => {
                  return <StartButton key={index} index={index} text={text} active={activeButton} onButtonClick={onButtonClick} />
                })}
              </div>
            </div>
          </div>
          {/* 4 tops */}
          <Corners className={""} />

        </div>
        {/* <PhaserGameNoSSR/> */}
      </div>

    </div>
  )
}
