import React from 'react'
import Image from 'next/image';
const LeftIcon = () => {
    return (
        <>
            <Image src="/icons/GE_RPGMaker.png" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Cryengine.png" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Construct.png" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Godot.png" width="40px" height="40px" />
            <div className={"mr-3"}></div>
            <Image src="/icons/GE_Unity.png" width="40px" height="40px" />
            <div className={"mr-5"}></div>
        </>
    )
}

export default LeftIcon