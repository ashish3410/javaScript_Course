const URL="http://api.weatherstack.com/current"
const btns=document.querySelectorAll("button")
const info=document.querySelector("h2")
const country=document.querySelector(".input")
let countryName
let data;
const getInfo=async ()=>{
    try {
        let response= await fetch(`http://api.weatherstack.com/current?access_key=77624517a61871a53b1a7dc568d73a31&query=${countryName}&unit=m&`)
        data=await response.json()
        console.log(data.location.name)
    } catch (error) {
        info.innerText=`Please enter a valid country name`
    }
   
}

btns.forEach((button)=> {
    button.addEventListener("click",(e)=>{
        countryName=country.value
        getInfo()
        const key=`${e.target.id}`
        switch (key){
            case "btn1":
                info.innerText=`${data.location.country},${data.location.name}`
                break;
            case "btn2":
                info.innerText=`${data.current.temperature}`
                break;
            case "btn3":
                info.innerText=`${data.location.localtime}`
                break;
            case "btn4":
                info.innerText=`${data.current.pressure}`
                break;
            case "btn5":
                info.innerText=`${data.current.humidity}`
                break;
        
            default:
                break;
        }
    })
});
