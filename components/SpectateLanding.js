import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import LeftIcon from './landing/LeftIcon';
import RightIcon from './landing/RightIcon';
import gsap from 'gsap'
const SpectateLanding = () => {
    let leftRef = useRef();
    let rightRef = useRef();
    let imageRef = useRef();
    const el = useRef();
    const im = useRef();
    const q = gsap.utils.selector(el);
    const imSel = gsap.utils.selector(el);
    useEffect(() => {
        im.current =  gsap.timeline()
        .fromTo(imageRef.current, { y: -400, scale: 0.2 }, { y: 0, duration: 2, scale: 1, ease: "circ.out" })
        .fromTo(q("#logo-text"), {y: 400, color: '#741FBB'}, {y: 0,  color: "white" , duration: 1.5, ease:"bounce.out"})
        gsap.fromTo(leftRef.current, { x: -300 }, {x: 0, duration: 1,  ease: "circ.out"});
        gsap.fromTo(rightRef.current, { x: 300 }, { x: 0, duration: 1,  ease: "circ.out" });
        
    }, [])
    return (
        <>
            <div  className={"flex flex-row"}>
                <div ref={leftRef} className={"hidden md:flex flex-row items-center justify-center "}>
                    <LeftIcon />
                </div>
                <div id={"gdm-logo"} ref={imageRef}>
                    <Image className={"mx-auto"} src="/GDM_Website_Logo.png" width={`${500 / 1.2}px`} height={`${152 / 1.2}px`} />
                </div>
                <div ref={rightRef} className={"hidden md:flex flex-row items-center justify-center"}>
                    <RightIcon />
                </div>
            </div>
            <div ref={el}>
                <h2 id={"logo-text"} className={"text-3xl text-white font-thin mt-4"}>{'<'} Game Dev Mongolia {'>'}</h2>
            </div>
        </>
    )
}

export default SpectateLanding