function BuildWalls(Bodies, cw, ch) {
    return [
        Bodies.rectangle(cw / 2, -10, cw, 1, { restitution: 1, isStatic: true, render: { fillStyle: '#ffffff',} }),
        Bodies.rectangle(-10, ch / 2, 1, ch, { restitution: 1, isStatic: true, render: { fillStyle: '#ffffff' } }),
        Bodies.rectangle(cw / 2, ch + 10, cw, 1, { restitution: 1, isStatic: true, render: { fillStyle: '#ffffff' } }),
        Bodies.rectangle(cw + 10, ch / 2, 1, ch, { restitution: 1, isStatic: true, render: { fillStyle: '#ffffff' } }),
    ]
}
export default BuildWalls;