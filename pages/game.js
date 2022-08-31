import React, { useEffect, useState, useRef } from 'react'
import FirstGameLogic from '../functions/FirstGameLogic';
import styles from '../styles/game.module.css';
import dynamic from 'next/dynamic';

const Device = dynamic(() => import('../components/Device', { ssr: false }));

const Game = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [landscape, setLandspace] = useState(false);
    const [mobWidth, setMobWidth] = useState();
    const [mobHeight, setMobHeight] = useState();
    const [errLog, setErrLog] = useState("nothing here");
    let gameRef = useRef();
    const checkOrientation = (e) => {
        setErrLog(screen.orientation.type);
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
        return (() => {
            window.removeEventListener("orientationchange", checkOrientation, false);
            window.removeEventListener("resize", resizeHappened, false);
        })
    }, [])

    return (
        <div className={"w-full h-screen  bg-[#181521]"}>
            <Device>
                {({ isMobile }) => {
                    if (isMobile) return (<> {
                        !landscape
                            ?
                            <h1 className={"text-white"}>Rotate your phone</h1>
                            :
                            <iframe src="game/index.html" ref={gameRef}  allowFullScreen={true} width={mobWidth} height={mobHeight} scrolling="no"  noresize="noresize" />
                    }
                        <h2 className={"text-white text-2xl"}>{errLog}</h2>
                    </>)
                    else {
                        return <><iframe className={"fixed top-0 left-0 bottom-0 right-0 w-full h-full border-none m-0 p-0 overflow-hidden z-9999"} src="game/index.html" ref={gameRef} allowFullScreen={true} width={width} height={height} scrolling="no" noresize="noresize" />
                            <h2 className={"text-white text-2xl"}>{errLog}</h2>
                        </>
                    }
                }}

            </Device>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     const UA = context.req.headers['user-agent'];
//     const isMobile = Boolean(UA.match(
//         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     ))

//     return {
//         props: {
//             deviceType: isMobile ? 'mobile' : 'desktop'
//         }
//     }
// }

export default Game