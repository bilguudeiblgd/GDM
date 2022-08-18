import React from 'react'
import Image from 'next/image';

const RightIcon = () => {
    return (
        <>
            <div className={"ml-5"}></div>
            <Image src="/icons/GE_Unreal.png" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_GameMaker.png" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_Frostbite.png" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_O3DEpng.png" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_Source.png" width="40px" height="40px" />

        </>
    )
}

export default RightIcon