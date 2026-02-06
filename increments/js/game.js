numClicks = 0

document.getElementById("cow").addEventListener("click", () => {
    numClicks++
    Select(document.getElementById("cow"))
})



function Select(img) {
   img.classList.add("shrink")

   setTimeout(()=>{
        img.classList.remove("shrink")
   },50)



}
