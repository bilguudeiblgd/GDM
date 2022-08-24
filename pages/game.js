import React, { useEffect, useState, useRef } from 'react'
import FirstGameLogic from '../functions/FirstGameLogic';
import styles from '../styles/game.module.css';
import dynamic from 'next/dynamic';
// const PhaserGameNoSSR = dynamic(() => import('../game'), {
//     ssr: false,
// })
// const PhaserGamePage = () => <PhaserGameNoSSR />

const Game = ({ deviceType }) => {
    console.log(deviceType);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [landscape, setLandspace] = useState(false);
    const [mobWidth, setMobWidth] = useState();
    const [mobHeight, setMobHeight] = useState();
    let gameRef = useRef();
    const checkOrientation = (e) => {
        console.log(screen.orientation);
        if (screen.orientation.type === "landscape-primary") {
            setLandspace(true);
        } else {
            setLandspace(false);
        }
        setMobHeight(window.innerWidth);
        setMobWidth(window.innerHeight);
    }
    const resizeHappened = (e) => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        window.addEventListener("orientationchange", checkOrientation, false);
        window.addEventListener("resize", resizeHappened, false);
        gameRef.current.focus();
        return (() => {
            window.removeEventListener("orientationchange", checkOrientation, false);
            window.removeEventListener("resize", resizeHappened, false);
        })
    }, [])
    let render;
    if (deviceType == "desktop") {
        render = <iframe src="game/index.html" ref={gameRef} allowFullScreen={true} width={width} height={height} scrolling="no" noresize="noresize" />
    } else {
        render = <>
            {
                !landscape
                    ?
                    <h1>Rotate your phone</h1>
                    :
                    <iframe src="game/index.html" ref={gameRef} allowFullScreen={true} width={mobWidth} height={mobHeight} scrolling="no" noresize="noresize" />
            }
        </>
    }
    return (
        <div className={"w-full h-screen bg-[#181521]"}>
            {render}
        </div>
    )
}

export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    return {
        props: {
            deviceType: isMobile ? 'mobile' : 'desktop'
        }
    }
}
export default Game