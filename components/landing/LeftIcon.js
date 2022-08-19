import React from 'react'
import Image from 'next/image';
const LeftIcon = () => {
    return (
        <>
            <Image src="/icons/GE_RPGMaker.png" alt="RPG Maker logo" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Cryengine.png" alt="CRYENGINE logo" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Construct.png" alt="Construct logo" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Godot.png" alt="Godot logo" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Unity.png" alt="Unity logo" width="40px" height="40px" />
            <div className={"mr-5"}></div>
        </>
    )
}

export default LeftIcon