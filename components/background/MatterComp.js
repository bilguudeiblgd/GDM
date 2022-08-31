import { useEffect, useRef, useState } from 'react'
import Matter, { Engine, Render, Bodies, Common, World, Vertices, Composite, Constraint, Body, Mouse, MouseConstraint } from 'matter-js'
import svg from '../../public/shards/singles/2.js';
import Pathseg from '../../functions/Pathseg';
import BuildWalls from './BuildWalls.js';

import ShardsThree from '../../public/shards/triples';
import ShardsOne from '../../public/shards/singles';
import { getRandom, getRandomFloat } from './RandomPos.js';
import shards from './shards.js';

function MatterComp({ onFinished }) {
    const [currentRender, setCurrentRender] = useState();
    const [currentWorld, setCurrentWorld] = useState();
    const scene = useRef()
    const engine = useRef(Engine.create({
        positionIterations: 20,
        gravity: {
            x: 0,
            y: 0,
            scale: 0.001
        }
    }))
    // const onMouseDown = (e) => {
    //     console.log("mouse hit", e);
    // }
    // const onMouseMove = (e) => {
    //     // console.log(e);
    // }
    // const onMouseUp = (e) => {
    //     console.log("mouse up", e);
    // }
    useEffect(() => {
        // mount
        // window.addEventListener("mousedown", onMouseDown);
        // window.addEventListener("mousemove", onMouseMove);
        // window.addEventListener("mouseup", onMouseUp)
        const cw = window.innerWidth
        const ch = window.innerHeight
        // 
        Pathseg();

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })

        const world = engine.current.world;
        setCurrentWorld(world);
        Composite.add(world, BuildWalls(Bodies, cw, ch));
        let oneShards = [];

        let manyShards = new window.DOMParser().parseFromString(shards, 'image/svg+xml');

        let bodies = [...manyShards.querySelectorAll("path")]

        let newBodies = bodies.map((pathsvg) => {
            let spawnX = getRandom(0, cw);
            let spawnY = getRandom(0, ch);
            let vertexSvg = Vertices.scale(Matter.Svg.pathToVertices(pathsvg), 0.4, 0.4);
            let svgbody = Bodies.fromVertices(spawnX, spawnY, vertexSvg, {
                label: 'shard',
                density: 1,
                restitution: 0.8,
                frictionAir: 0,
                render: {
                    lineWidth: 3,
                    fillStyle: 'transparent',
                    strokeStyle: "#3A314D"
                }
            }, true);
            // if(typeof svgbody === 'undefined') {
            //     return;
            // }
            oneShards.push(svgbody);
            return svgbody;
        });
        Composite.add(world, oneShards);
        // applyforce to bodies

        oneShards.forEach((shard) => {
            Body.applyForce(shard, shard.position, { x: getRandomFloat(0.1, 1), y: getRandomFloat(0.1, 1) });
        })
        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                stiffness: 1,
                render: {
                    visible: false
                }

            }
        });
        Composite.add(world, mouseConstraint);
        render.mouse = mouse;
        // run the engine
        Matter.Runner.run(engine.current)
        Render.run(render)
        onFinished();

        setCurrentRender(render);
        // unmount
        return () => {
            // destroy Matter
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
            // window.removeEventListener("mousedown", onMouseDown);
            // window.removeEventListener("mousemove", onMouseMove);
            // window.addEventListener("mouseup", onMouseUp)

        }
    }, []);
    const isPressed = useRef(false)

    const handleDown = () => {
        console.log("is presssed");
        isPressed.current = true
    }

    const handleUp = () => {
        isPressed.current = false
    }

    const handleAddCircle = e => {
        // if (isPressed.current) {
        //     let mouse = Mouse.create(currentRender.canvas)
        //     let mouseConstraint = MouseConstraint.create(engine, {
        //         mouse: mouse,
        //         constraint: {
        //             stiffness: 1,
        //             render: { visible: true }
        //         }
        //     });
        //     World.add(currentWorld, mouseConstraint);
        //     currentRender.mouse = mouse;
        // }
        // if (isPressed.current) {
        //     const ball = Bodies.circle(
        //         e.clientX,
        //         e.clientY,
        //         10 + Math.random() * 30,
        //         {
        //             mass: 10,
        //             restitution: 0.9,
        //             friction: 0.005,
        //             render: {
        //                 fillStyle: '#0000ff'
        //             }
        //         })
        //     World.add(engine.current.world, [ball])
        // }
    }
    return (
        <div
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onMouseMove={handleAddCircle}
        >
            <div ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default MatterComp