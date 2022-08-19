import { useEffect, useState, useCallback } from 'react';
import styles from '../styles/Wrapper.module.css';
import MatterComp from './background/MatterComp';
import dynamic from 'next/dynamic';
import Script from 'next/script';
// const PhaserGamePage = () => <PhaserGameNoSSR />
const Wrapper = ({ children }) => {
    const [balls, setBalls] = useState([]);
    const [back, setBack] = useState(false);
    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup

        let newBalls = balls;
        let width = window.innerWidth;
        let height = window.innerHeight;
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * (width - 50);
            let y = Math.random() * (height - 50);
            let num = Math.floor(Math.random() * 4);
            // var angle = Math.random() * Math.PI * 2;
            // let x = Math.cos(angle) * radius;
            // let y = Math.sin(angle) * radius;
            newBalls.push([x, y, num]);
        }
        setBalls([...newBalls]);
        setBack(false);
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }

    }, [])
    return <div className={""}>

        <div className={styles.landing_container}>
            
            <div className={styles.landing_background_glow}>
                <div className="w-full h-screen fixed z-0">
                    {/* {balls.map(([x, y, num], index) => {
                        return <Shard key={index} x={x} y={y} num={num} />
                    })} */}
                    {back && <MatterComp />}

                </div>
                <div >
                    {children}
                </div>
            </div>
        </div>
    </div>
}

const Shard = ({ x, y, num }) => {
    console.log(x, y);
    return <div style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }} className={"w-10 h-10 z-0"}>
        <img style={{ transform: `translate()` }} src={`/singles/${num}.svg`} />

    </div>
}
export default Wrapper;