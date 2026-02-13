const player = {
    numClicks: 0,
    numClickers: 0,
    numAutoClickSpeed: 1,
    numUpgradeClick: 1,
}
let moreClickersPrice = 0; 
let autoClickSpeedPrice = 0;
let upgradeClick = 0;

document.getElementById("cow").addEventListener("click", () => {
    player.numClicks++
    document.getElementById("score").innerHTML = player.numClicks
    Select(document.getElementById("cow"))
})

document.getElementById("moreClicks").addEventListener("click", () =>{
    player.numClickers++;
    Select(document.getElementById("moreClicks"))
})

document.getElementById("autoClickSpeed").addEventListener("click", () =>{
    player.numAutoClickSpeed++;
    Select(document.getElementById("autoClickSpeed"))
})

document.getElementById("upgradeClick").addEventListener("click", () =>{
    player.numClickers++;
    Select(document.getElementById("upgradeClick"))
})



function Select(img) {
   img.classList.add("shrink")
   setTimeout(()=>{
        img.classList.remove("shrink")
   },50)
}
