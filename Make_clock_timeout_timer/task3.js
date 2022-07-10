let timer = (sec) => setInterval( () => { if(sec === 0){
    clearInterval(timer);
}else{
    sec--;
    console.log(`Timer: ${sec}`);
}
}, 1000);

timer(30);