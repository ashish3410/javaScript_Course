const button=document.querySelector("#button")    
const modeButton=document.querySelector(".modeButton")
const body=document.querySelector("body")
let mode="dark"
button.addEventListener('click',()=>{
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector('#result')
    if(height==="" || height < 0 || isNaN(height)){
        result.innerHTML="<span>Please inter the valid input</span>"
    }else if(height==="" || height<0 || isNaN(height)){
        result.innerHTML="<span>Please inter the valid input</span>"
    }else{
    let ans=(weight/((height*height)/10000)).toFixed(2)
        if(ans<18.5){
            result.innerHTML=`BMI is ${ans}, Your weight is low`;
        }else if(ans>18.5 && ans<25){ 
            result.innerHTML=`BMI is ${ans}, Your weight is normal`;
        }else if(ans>25 && ans<30){ 
            result.innerHTML=`BMI is ${ans}, Your weight is Over`;
        }else if(ans>30){ 
            result.innerHTML=`BMI is ${ans}, Your weight is Obese`;
        }
     
    } 
})
modeButton.addEventListener("click",function changeMode(){
    if(mode==="dark"){
        mode='Light'
        modeButton.innerHTML=`Change Mode(Dark)`
        body.style.backgroundColor="white"
        body.style.color="black"
    }else{
        mode="dark"
        modeButton.innerHTML=`Change Mode(Light)`
        body.style.backgroundColor="black"
        body.style.color="white"
    }
})