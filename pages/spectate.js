import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import LeftIcon from '../components/landing/LeftIcon';
import RightIcon from '../components/landing/RightIcon';
import Wrapper from '../components/Wrapper';

const spectate = () => {
  const [shardCom, setShardCom] = useState(['7']);
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
        <div className={"flex flex-row"}>
          <div className={"flex flex-row items-center "}>
            <LeftIcon/>
          </div>

          <Image className={"mx-auto"} src="/GDM_Website_Logo.png" width={`${500/1.2}px`} height={`${152/1.2}px`} />
          <div className={"flex flex-row items-center"}>
            <RightIcon/>
          </div>

        </div>
        <h2 className={"text-3xl text-white font-thin mt-4"}>{'<'} Game Dev Mongolia {'>'}</h2>
      </div>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>

      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1> <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
      <h1 className={"text-9xl"}>dada</h1>
    </div>

  )
}

const shards = ['7', '8', '9', '10'];
const Shard = () => {

}


export default spectate