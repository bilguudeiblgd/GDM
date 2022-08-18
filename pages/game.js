import React, { useEffect, useState, useRef } from 'react'
import FirstGameLogic from '../functions/FirstGameLogic';
import styles from '../styles/game.module.css';
// const PhaserGameNoSSR = dynamic(() => import('../game'), {
//     ssr: false,
// })
// const PhaserGamePage = () => <PhaserGameNoSSR />

const game = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const canvasEl = useRef();
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        FirstGameLogic(canvasEl.current);
    }, [])

    return (
        <div className={"w-full h-screen bg-[#181521]"}>
            <div className={styles.landing_background_glow}>
                <div className={[styles.landing_background_shards]}>
                    <canvas ref={canvasEl} className={"bg-transparent block mx-0"} id="myCanvas"></canvas>

                </div>
            </div>
        </div>
    )
}

export default game