import { useRef } from "react";
import { Types } from "phaser";

import { BootScene } from "./scenes";
import { useGame } from "../hooks";

const gameConfig = {
    width: "800px",
    height: "600px",
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
        antialias: false,
        pixelArt: true,
        roundPixels: true
    },
    scene: BootScene
};
const PhaserGame = () => {
    const parentEl = useRef(null)
    useGame(gameConfig, parentEl)

    return (
        <div className="container">
            <div style={{height: "100vh"}} ref={parentEl} />
        </div>
    )
}

export default PhaserGame

