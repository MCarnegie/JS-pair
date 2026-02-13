const player = {
    numClicks: 0,
    numClickers: 0,
    numAutoClickSpeed: 1,
    numUpgradeClick: 1,
}
let moreClickersPrice = 0;
let autoClickSpeedPrice = 0;
let upgradeClick = 0;
let numUpgrades = 5;

document.getElementById("cow").addEventListener("click", () => {
    player.numClicks++
    document.getElementById("pointsFill").innerHTML = player.numClicks
    Select(document.getElementById("cow"))
})

document.getElementById("moreClicks").addEventListener("click", () => {
    player.numClickers++;
    numUpgrades++;
    Select(document.getElementById("moreClicks"))
})

document.getElementById("autoClickSpeed").addEventListener("click", () => {
    player.numAutoClickSpeed++;
    numUpgrades++;
    Select(document.getElementById("autoClickSpeed"))
})

document.getElementById("upgradeClick").addEventListener("click", () => {
    player.numClickers++;
    numUpgrades++;
    Select(document.getElementById("upgradeClick"))
})



function Select(img) {
    img.classList.add("shrink")
    setTimeout(() => {
        img.classList.remove("shrink")
    }, 50)
}




//   let totalPoints = 0;    
//   let clickValue = 1;      
//   let upgradesInPlay = 0;  


const pointsFill = document.getElementById("pointsFill");
const clickStars = document.getElementById("clickStars");
const upgradeDots = document.getElementById("upgradeDots");


function renderScoreboard() {
    const segmentMax = 200;
    const progress = player.numClicks % segmentMax;
    const percent = (progress / segmentMax) * 100;
    pointsFill.style.width = percent + "%";


    clickStars.innerHTML = "";
    for (let i = 0; i < player.numUpgradeClick; i++) {
        const star = document.createElement("span");
        star.textContent = "⭐";
        clickStars.appendChild(star);
    }


    upgradeDots.innerHTML = "";
    for (let i = 0; i < numUpgrades; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        upgradeDots.appendChild(dot);
    }
}

window.addEventListener("load", () => {
    renderScoreboard();
})




//   document.getElementById("demoUpgrade").addEventListener("click", () => {
//     upgradesInPlay += 1;
//     clickValue += 1;
//     renderScoreboard();
//   });

// lick handler ：
// totalPoints += clickValue; renderScoreboard();
// upgrade handler ：
// upgradesInPlay += 1; clickValue += 1; renderScoreboard();
