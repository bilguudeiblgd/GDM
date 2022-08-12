import React, { useEffect, useState } from 'react'

const StartButton = ({ index, text, active, onButtonClick }) => {
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
    }
    return (
        <button onClick={clickHandler}><h2 className={`text-white font-extralight uppercase mt-4 ${selfActive ? "text-4xl" : " text-3xl"}`}>{'>'} {text} {'<'}</h2></button>
    )
}

export default StartButton