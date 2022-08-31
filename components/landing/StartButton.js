import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import styles from "./StartButton.module.css";
const StartButton = ({ index, text, active, onButtonClick }) => {
    const router = useRouter();
    const [selfActive, setSelfActive] = useState(false);
    useEffect(() => {
        if(index === active) {
            // im currently active or smth
            setSelfActive(true);
        } else {
            setSelfActive(false);
        }
    }, [active])
    const clickHandler = (e) => {
        console.log(index);
        onButtonClick(index);
        if(index == 0) {
            router.push("/game");
        } else if(index == 1) {
            router.push('/spectate');
        } else if(index == 2) {
            router.push('/spectate#contacts')
        }
    }
    return (
        <button className={"w-max z-30"} onClick={clickHandler}><h2 className={`text-white ${styles.text} hover:text-4xl z-10 font-extralight uppercase mt-4 ${selfActive ? "text-3xl" : " text-3xl"}`}>{text}</h2></button>
    )
}

export default StartButton