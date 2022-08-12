import React from 'react'
import Image from 'next/image'
const Corners = () => {
    return (
        <>
            <div className={"absolute top-0 left-0 pt-2 pl-2"}>
                <Image src="/corner_topleft.png" width="45px" height="44px" alt="lined decoration" />
            </div>
            <div className={"absolute top-0 right-0 pt-2 pr-2"}>
                <Image src="/corner_topright.png" width="45px" height="44px" alt="lined decoration" />
            </div>
            <div className={"absolute bottom-0 left-0 pb-2 pl-2"}>
                <Image src="/corner_topleft.png" width="45px" height="44px" alt="lined decoration" />
            </div>
            <div className={"absolute bottom-0 right-0 pb-2 pr-2"}>
                <Image src="/corner_topleft.png" width="45px" height="44px" alt="lined decoration" />
            </div>
        </>
    )
}

export default Corners