import React, { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
const AboutSection = () => {
    let containerRef = useRef();
    let q = gsap.utils.selector(containerRef);
    useEffect(() => {
        q('.about-text').forEach((item, index) => {
            const tl = gsap.timeline()
                .fromTo(q(`.box-bg${index}`), {xPercent: 0, }, {xPercent: 100,  scrollTrigger: {
                    trigger: q(`.box-bg${index}`),
                    scrub: 2,
                    start: 'top 100%',
                    end: 'top 30%',
                }})
                .fromTo(item, { y: 50 }, { y: 0 })
        })
    }, []);
    return (
        <>
            <div ref={containerRef} className={"container w-full flex flex-col items-center justify-center mx-auto mt-16"}>
                <Typewriter options={{
                    autoStart: true,
                    delay: 20,
                }} onInit={(typewriter) => {
                    typewriter.typeString(`<span class="text-center text-white text-2xl">GAME DEV MONGOLIA is a community that</span>`).start();
                }} />
                <div className={"relative overflow-hidden border1 mx-10 w-3/4 my-4 border h-20 flex items-center justify-center border-prim-green  "}>
                    <div className={"bg-prim-green box-bg0 w-full h-full absolute top-0 left-0"}></div>
                    <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-green"}></div>
                    <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-green"}></div>
                    <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-green"}></div>
                    <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-green"}></div>
                    <p className={"uppercase about-text whitespace-nowrap text-center text-xl sm:text-2xl md:text-3xl textgame text-prim-green"}>{">"} Host game events</p>
                </div>
                <div className={"relative overflow-hidden border2 mx-10 w-3/4 my-4 border h-20 flex items-center justify-center  border-prim-blue"}>
                    <div className={"bg-prim-blue box-bg1 w-full h-full absolute top-0 left-0"}></div>
                    <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                    <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                    <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                    <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                    <p className={"uppercase about-text whitespace-nowrap text-center text-xl sm:text-2xl md:text-3xl   textgame text-prim-blue"}>{">"} provides networking</p>
                </div>
                <div className={"relative overflow-hidden border3 mx-10 w-3/4 my-4 border h-20 flex items-center justify-center border-prim-purple"}>
                    <div className={"bg-prim-purple box-bg2 w-full h-full absolute top-0 left-0"}></div>

                    <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                    <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                    <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                    <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                    <p className={"uppercase about-text whitespace-nowrap text-center text-xl sm:text-2xl md:text-3xl textgame text-prim-purple"}>{">"} offers resources</p>
                </div>
                <Typewriter options={{
                    autoStart: true,
                    delay: 20,
                }} onInit={(typewriter) => {
                    typewriter.typeString(`<span class="text-center text-white text-2xl">for game
              developers in mongolia.</span>`).start();
                }} />

            </div>
        </>
    )
}

export default AboutSection