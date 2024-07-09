const time = document.getElementById('box');

setInterval(()=>{
    const date = new Date();
    console.log(date.toLocaleTimeString());
    time.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000);