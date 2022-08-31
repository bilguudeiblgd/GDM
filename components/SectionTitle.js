import React, {useEffect, useRef} from 'react'
import styles from '../styles/SectionTitle.module.css';
import gsap from 'gsap';
const SectionTitle = ({ text }) => {
    const textRef = useRef();
    const containerRef = useRef();
    useEffect(() => {
        gsap.fromTo(containerRef.current, {y: 100} , {y: 0, ease: "power3.out", scrollTrigger: {
            trigger:containerRef.current,
            toggleActions: "restart resume resume resset",
            start: "top 100%",
            end: "top 70%",
        }});
    }, [])
    return (
        <div className={"flex justify-center"}>
            <div ref={containerRef} className={`relative overflow-hidden box ${styles.box}`}>
                <h1 className={`whitespace-nowrap ${styles.title_text} text-5xl sm:text-6xl text-white font-title font-bold`}>{text}</h1>
                <h1 ref={textRef} className={`whitespace-nowrap ${styles.title_background_text} text-5xl sm:text-6xl font-title  font-bold`}>{text}</h1>
            </div>
        </div>
    )
}

export default SectionTitle