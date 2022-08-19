import React from 'react'
import Image from 'next/image';

const RightIcon = () => {
    return (
        <>
            <div className={"ml-5"}></div>
            <Image src="/icons/GE_Unreal.png" alt="Unreal logo" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_GameMaker.png" alt="GameMaker logo" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_Frostbite.png" alt="Frostbite logo" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_O3DEpng.png" alt="O3DE logo" width="40px" height="40px" />
            <div className={"ml-3"}></div>
            <Image src="/icons/GE_Source.png" alt="Source engine logo" width="40px" height="40px" />

        </>
    )
}

export default RightIcon