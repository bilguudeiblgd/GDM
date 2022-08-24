import React, { useEffect, useState, useRef } from 'react'
import FirstGameLogic from '../functions/FirstGameLogic';
import styles from '../styles/game.module.css';
// const PhaserGameNoSSR = dynamic(() => import('../game'), {
//     ssr: false,
// })
// const PhaserGamePage = () => <PhaserGameNoSSR />

const Game = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    let gameRef = useRef();
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        gameRef.current.focus();
    }, [])

    return (
        <div className={"w-full h-screen bg-[#181521]"}>
            <iframe src="game/index.html" ref={gameRef} width={width} height={height} scrolling="no" noresize="noresize" />
        </div>
    )
}

export default Game