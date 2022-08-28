import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../styles/RoadMapBox.module.css';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
const RoadMapBox = ({ roadMapRef }) => {
    let boxRef = useRef();
    let containerBoxRef = useRef();
    let tl = useRef();
    useEffect(() => {
        const q = gsap.utils.selector(containerBoxRef);

        const ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger)
        q('.timeline').forEach((el, index) => {
            gsap.fromTo(el, { y: -300, opacity: 0 }, {
                y: 0, opacity: 1, scrollTrigger: {
                    trigger: q(`#container-box${index + 1}`),
                    start: "top 65%",
                }
            });
        })
        gsap.fromTo(q('.border1'), {height: '74px'}, {height: '100%', scrollTrigger: {
            trigger: q('#container-box1'),
            start: "top 67%",
        }})
        gsap.fromTo(q('.border2'), {height: '74px'}, {height: '100%', scrollTrigger: {
            trigger: q('#container-box2'),
            start: "top 67%",
        }})
        gsap.fromTo(q('.border3'), {height: '74px'}, {height: '100%', scrollTrigger: {
            trigger: q('#container-box3'),
            start: "top 67%",
        }})

    }, [])
    return (
        <>
            <div ref={containerBoxRef} className={"container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto px-4 mt-20"}>
                <div id="container-box1" className={"flex justify-center"}>
                    <div className={`${styles.box} border1 border-prim-purple relative`}>
                        <div className={"small-dot absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"small-dot absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"small-dot absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"small-dot absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        {/* content */}
                        <div>
                            <p id="title-server" className={"font-title text-4xl text-center py-4 text-white"}><span className={`${styles.outlined_text_purple}`}>SER</span>SERVER<span className={`${styles.outlined_text_purple}`}>VER</span></p>
                            <div className={"overflow-hidden w-full h-full"}>
                                <div className={"border-b border-prim-purple mx-3"}></div>

                                <div className={"timeline w-full"}>
                                    <div className={"mt-6 mx-10 relative"}>
                                        <InnerBox date={"< 8 / 1 >"} text1={"CLOSED"} text2={"RELEASE"} color={"prim-purple"} />
                                    </div>
                                    <div className={"mt-8 mx-10 relative"}>
                                        <InnerBox date={"< 8 / 15 >"} text1={"FULL"} text2={"RELEASE"} color={"prim-purple"} />
                                    </div>
                                    <div className={"mt-8 mb-8 mx-10 relative"}>
                                        <InnerBox date={'< 8 / 22 >'} text1={"SERVER"} text2={"PARTNERS"} color={"prim-purple"} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*  */}
                <div id="container-box2" className={"flex flex-col justify-start items-center"}>
                    <div className={`${styles.box} border2 border-prim-blue relative`}>
                        <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                        <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                        <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                        <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}></div>
                        {/* content */}
                        <div>
                            <p className={"font-title text-4xl text-center py-4 text-white"}><span className={`${styles.outlined_text_blue}`}>WEB</span>WEBSITE<span className={`${styles.outlined_text_blue}`}>WEB</span></p>
                            <div className={"w-full"}>
                                <div className={"overflow-hidden"}>
                                    <div className={"border-b border-prim-blue mx-3"}></div>
                                    <div className={"timeline w-full"}>
                                        <div className={"mt-6 mx-10 relative"}>
                                            <InnerBox date={"< 8 / 9 >"} text1={"LAUNCH"} text2={"ROADMAP"} color={"prim-blue"} />
                                        </div>
                                        <div className={"mt-8 mb-8 mx-10 relative"}>
                                            <InnerBox date={'< 8 / 12 >'} text1={"GDM"} text2={"WEBSITE"} color={"prim-blue"} />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={"mt-10"}>
                        <h2 className={`text-5xl font-title ${styles.outlined_text_white}  `}>AUGUST - SEPTEMBER</h2>
                    </div>
                </div>

                <div id="container-box3" className={"flex justify-center"}>
                    <div className={`${styles.box} border3 border-prim-green relative`}>
                        <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-green"}></div>
                        <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-green"}></div>
                        <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-green"}></div>
                        <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-green"}></div>
                        {/* content */}
                        <div>
                            <p className={"font-title text-4xl text-center py-4 text-white"}><span className={`${styles.outlined_text_green}`}>GAME</span>GAME JAM<span className={`${styles.outlined_text_green}`}>JAM</span></p>
                            <div className={"overflow-hidden w-full"}>
                                <div className={"border-b border-prim-green mx-3"}></div>
                                <div className={"timeline"}>
                                    <div className={"mt-6 mx-10 relative"}>
                                        <InnerBox date={"< 9 / 3 >"} text1={"GAME JAM"} text2={"THEME"} color={"prim-green"} />
                                    </div>
                                    <div className={"mt-8 mx-10 relative"}>
                                        <InnerBox date={"< 9 / 8 >"} text1={"SUBMISSION"} text2={"DEADLINE"} color={"prim-green"} />
                                    </div>
                                    <div className={"mt-8 mb-8 mx-10 relative"}>
                                        <InnerBox date={'< 9 / 10 >'} text1={"SHOWCASE"} text2={"LIVE EVENT"} color={"prim-green"} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const InnerBox = ({ date, text1, text2, color }) => {
    return (<>
        <div className={"absolute z-10  overflow-hidden -top-4 left-1/2 -translate-x-1/2"}>
            <p className={"text-white text-lg font-medium"}>{date}</p>
        </div>
        <div className={`border-b border-l border-r z-0 border-${color} relative`}>
            <div className={`absolute -top-0 w-14 border-t border-${color}`}></div>
            <div className={`absolute -top-0 right-0 w-14 border-t border-${color}`}></div>
            <div className={`absolute -top-1 -left-1 w-1.5 h-1.5 bg-${color}`}></div>
            <div className={`absolute -top-1 -right-1 w-1.5 h-1.5 bg-${color}`}></div>
            <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-${color}`}></div>
            <div className={`absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-${color}`}></div>

            <div>
                <p className={"text-gray-200 font-light text-center py-4"}>{text1} <br /> {text2}</p>
            </div>
        </div>
    </>)
}

export default RoadMapBox