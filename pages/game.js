import React, { useEffect, useState, useRef } from 'react'
import FirstGameLogic from '../functions/FirstGameLogic';
import styles from '../styles/game.module.css';
import dynamic from 'next/dynamic';
import { TbDeviceMobileRotated } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';
const Device = dynamic(() => import('../components/Device', { ssr: false }));

const Game = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [landscape, setLandspace] = useState(false);
    const [mobWidth, setMobWidth] = useState();
    const [mobHeight, setMobHeight] = useState();
    const [fullscreen, setFullscreen] = useState(false);
    const [errLog, setErrLog] = useState("nothing here");
    let gameRef = useRef();
    let containerRef = useRef();
    const checkOrientation = (e) => {
        const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        if (iOS) {
            if (window.innerHeight > window.innerWidth) {
                setLandspace(false);
            }
            else {
                setLandspace(true);
            }

        }
        else {
            if (screen.orientation.type === "landscape-primary") {
                setLandspace(true);
            } else {
                setLandspace(false);
            }
        }

        setMobHeight(window.innerWidth);
        setMobWidth(window.innerHeight);
    }
    const resizeHappened = (e) => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        if(iOS) {
            checkOrientation("whatever");
        }
    }
    const fullScreenError = (e) => {
        containerRef.current.requestFullscreen();
    }
    const exitFullScreen = (e) => {
        if (gameRef.current.exitFullscreen) {
            gameRef.current.exitFullscreen();
        }
    }
    const requestFullScreen = (e) => {
        if (gameRef.current.requestFullscreen)
            gameRef.current.requestFullscreen();
        else if (gameRef.current.webkitRequestFullscreen)
            gameRef.current.webkitRequestFullscreen();
        else if (gameRef.current.msRequestFullScreen)
            gameRef.current.msRequestFullScreen()
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        checkOrientation("whatever");
        if (typeof screen.orientation !== 'undefined') {
            screen.orientation.addEventListener('change', checkOrientation)
        }
        window.addEventListener("resize", resizeHappened, false);
        document.addEventListener("fullscreenerror", fullScreenError)
        document.addEventListener("fullscreenchange", function () {
            setFullscreen(document.fullscreenElement !== null);
        }, false);

        if (gameRef.current) {
            gameRef.current.focus()
        }
        return (() => {
            window.removeEventListener("resize", resizeHappened, false);
            document.removeEventListener("fullscreenerror", fullScreenError);
            document.removeEventListener("fullscreenchange", function () {
                setFullscreen(document.fullscreenElement !== null);
            }, false);


        })
    }, [])

    return (
        <div ref={containerRef} className={"w-full h-screen  bg-[#181521]"}>
            <Device>
                {({ isMobile }) => {
                    if (isMobile) return (<>
                        <div className={"w-full h-full"}>
                            <iframe src="game/index.html" className={"fixed top-0 left-0 bottom-0 right-0 w-full h-full border-none m-0 p-0 overflow-hidden z-9999"} ref={gameRef} allowFullScreen={true} webkitAllowFullScreen={true} msAllowFullScreen={true} width={mobWidth} height={mobHeight} scrolling="no" noresize="noresize" />
                        </div>
                        <div>
                            {
                                fullscreen ?
                                    <button onClick={exitFullScreen} className={"fixed bottom-2 right-2.5 z-10000"} >
                                        <p className={"text-white"}>Exit fullscreen</p>
                                    </button>
                                    :
                                    <button onClick={requestFullScreen} className={"fixed bottom-2 right-2.5 z-10000"} >
                                        <p className={"text-white"}>Fullscreen</p>
                                    </button>
                            }
                        </div>
                        {
                            !landscape &&
                            <div className={"fixed top-10 w-full z-10000"}>
                                <div className={"w-full flex justify-center flex-col items-center"}>
                                    <button>
                                        <p className={"text-white"}>Rotate your phone to get the best experience</p>
                                    </button>
                                    <TbDeviceMobileRotated color={"#ffffff"} size={48} />
                                </div>

                            </div>
                        }
                    </>)
                    else {
                        return <><iframe className={"fixed top-0 left-0 bottom-0 right-0 w-full h-full border-none m-0 p-0 overflow-hidden z-9999"} src="game/index.html" ref={gameRef} allowFullScreen={true} webkitAllowFullScreen={true} msAllowFullScreen={true} width={width} height={height} scrolling="no" noresize="noresize" />
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