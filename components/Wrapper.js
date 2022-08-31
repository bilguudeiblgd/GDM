import { useEffect, useState, useCallback } from 'react';
import styles from '../styles/Wrapper.module.css';
import MatterComp from './background/MatterComp';
import { useRouter } from 'next/router';
import Loading from './Loading';
const Wrapper = ({ children }) => {
    const [play, setPlay] = useState(false);
    const [loading, setLoading] = useState(true);
    const [interactive, setInteractive] = useState(false);
    const router = useRouter();
    const onFinished = () => {
        setLoading(false);
    }
    useEffect(() => {
        console.log(router.pathname)
        // remove event on unmount to prevent a memory leak with the cleanup
        if(router.pathname !== '/game') {
            setPlay(true);
        };
        if(router.pathname === '/') {
            setInteractive(true);
        } else {
            setInteractive(false);
        }

    }, [router.pathname])
    return <div className={""}>

        <div className={styles.landing_container}>
            <div className={styles.landing_background_glow}>
                <div className="w-full h-screen fixed z-20">
                    {play && <MatterComp onFinished={onFinished} />}

                </div>
                <div className={`${!interactive ? "relative z-30" : "z-10" }`}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}


export default Wrapper;