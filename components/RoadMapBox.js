import React from 'react'
import styles from '../styles/RoadMapBox.module.css';
const RoadMapBox = () => {
    return (
        <div className={`${styles.box} border-prim-purple relative`}>
            <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
            <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
            <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
            <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
            {/* content */}
            <div>
                <p className={"text-white"}><span>SER</span>SERVER<span>VER</span></p>
                <div className={"w-full"}>
                    <div className={"border-b border-prim-purple mx-3"}></div>
                    <div className={"border border-prim-purple mt-6 mx-6 relative"}>
                        <div className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-purple"}></div>
                        <div>
                            <p>CLOSED <br/> RELEASE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMapBox