let clock = () => {
    setInterval(() => {
        let getTime = new Date();
        let hours = (getTime.getHours() < 10) ? '0' + getTime.getHours() : getTime.getHours();
        let min = (getTime.getMinutes() < 10) ? '0' + getTime.getMinutes() : getTime.getMinutes();
        let sec = (getTime.getSeconds() < 10) ? '0' + getTime.getSeconds() : getTime.getSeconds();
        console.log(`${hours}:${min}:${sec}` )}, 1000);
}
clock();
    