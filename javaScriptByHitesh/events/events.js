//some event 
// type , timestamp, preventDefault, target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY, altKey, ctrlKey, shiftkey, keyCode /

 
// addEventListener take three parameter 1:event 2:function 3:eventPropagation
// event propagation is of two type=>1:bubbling (when 3 param is false propagation tyoe is bubling)2:event Capturing(when 3 param is true then propagation type is event capturing)


// example:
// 1:bubbling
// document.getElementById("images").addEventListener('click',(e)=>{
//     console.log("clicked inside ul")
// },false)
// document.getElementById("img2").addEventListener("click",function(e){
//     console.log("clicked on second image")
// },false)


// 2:capturing
// document.getElementById("images").addEventListener('click',(e)=>{
//     console.log("clicked inside ul")
// },true)
// document.getElementById("img2").addEventListener("click",function(e){
//     console.log("clicked on second image")
// },true)


// when we want that propagation not occur(means we want to listen only that particular event) we use a method called as (stopPropagation())
example:
// document.getElementById("img1").addEventListener("click",function(e){
//         e.stopPropagation()
//         console.log("clicked on first image")
//     },false)

    
// to stop the default behavoiur of any event we use preventDefault()
document.querySelector(".link").addEventListener("click",(e)=>{
    e.preventDefault();
})

document.querySelector("#images").addEventListener("click",function(e){
    // console.log(e.target.parentNode.id)
    // console.log(e.target.parentNode.id==="images")
    console.log(e.target.tagName)
    if(e.target.tagName==="IMG"){
    const removeIt=e.target.parentNode
    console.log(removeIt.id)
    removeIt.remove()
    }
})