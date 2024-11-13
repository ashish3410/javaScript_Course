const h1=document.querySelector("h1")
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const Time=document.querySelector("#time")
function printTime(){
    const time=new Date()
    Time.innerHTML=`Time:${time.toLocaleTimeString()}`
}
let stopInt;
start.addEventListener("click",function(){
    stopInt=setInterval(printTime,1000)
},false)

stop.addEventListener("click",function(){
    time.innerHTML=""
    clearInterval(stopInt)
},false)