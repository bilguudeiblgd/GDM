function FirstGameLogic(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    
    let bullet = new Image();
    bullet.onload = () => {ctx.drawImage(bullet, canvas.width - 100, 0, )};
    bullet.src= '/game/about_bullet.png';
    
}
export default FirstGameLogic;