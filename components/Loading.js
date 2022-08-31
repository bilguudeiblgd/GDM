import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Loading = () => {
    const containerRef = useRef();
    const q = gsap.utils.selector(containerRef);
    useEffect(() => {
        gsap.to(q(".circle1"), {
            y: 0,
            stagger: { each: 0.15, yoyo: true, repeat: -1 },
            ease: "sine.inOut"
        });
        gsap.to(q(".circle2"), {
            y: 30,
            stagger: { each: 0.15, yoyo: true, repeat: -1 },
            ease: "sine.inOut"
        });
    }, [])
    return (
        <div ref={containerRef} className={"flex justify-center"}>
            <div style={{ transform: "translateY(-30px)" }} className={" circle1 bg-white w-2.5 h-2.5 mr-2 rounded-full"}></div>
            <div style={{ transform: "translateY(0px)" }} className={" circle2 bg-white w-2.5 h-2.5 mr-2 rounded-full"}></div>
            <div style={{ transform: "translateY(-30px)" }} className={" circle1 bg-white w-2.5 h-2.5 mr-2 rounded-full"}></div>
            <div style={{ transform: "translateY(0px)" }} className={" circle2 bg-white w-2.5 h-2.5 rounded-full"}></div>
        </div>
    )
}

export default Loading