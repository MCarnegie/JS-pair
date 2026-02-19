const player = {
    numClicks: 500000000,
    numAutoClickSpeed: 0,
    numUpgradeClick: 0,
}
let autoClickSpeedPrice = 50;
let upgradeClickPrice = 5;
let interval;

document.getElementById("cow").addEventListener("click", () => {
    player.numClicks += 1 + (player.numUpgradeClick)
    document.getElementById("pointsFill").innerHTML = player.numClicks


    Select(document.getElementById("cow"))
})

document.getElementById("autoClickSpeed").addEventListener("click", () => {
    if (player.numClicks >= autoClickSpeedPrice) {
        player.numClicks -= autoClickSpeedPrice
        document.getElementById("pointsFill").innerHTML = player.numClicks
        player.numAutoClickSpeed++;
        autoClickSpeedPrice = Math.floor(50*(Math.pow(1.15,player.numAutoClickSpeed)))
        document.getElementById("autoPrice").innerHTML = autoClickSpeedPrice
        if (interval != null) {
            clearInterval(interval)
        }

        interval = setInterval(() => {
            player.numClicks++
            document.getElementById("pointsFill").innerHTML = player.numClicks
        }, 1000 - (player.numAutoClickSpeed * 100))
    }

    if(player.numAutoClickSpeed==1){
        document.getElementById("5000noUpgrade").classList.add("hidden")
        document.getElementById("5000Upgrade").classList.remove("hidden")
    }

    renderScoreboard();
    Select(document.getElementById("autoClickSpeed"))
})

document.getElementById("upgradeClick").addEventListener("click", () => {
    if (player.numClicks >= upgradeClickPrice) {
        player.numClicks -= upgradeClickPrice;
        document.getElementById("pointsFill").innerHTML = player.numClicks
        player.numUpgradeClick++;
        upgradeClickPrice += Math.floor(5*(Math.pow(1.15,player.numUpgradeClick)))
        document.getElementById("clickPrice").innerHTML = upgradeClickPrice

    }




    renderScoreboard();
    Select(document.getElementById("upgradeClick"))
})



function Select(img) {
    img.classList.add("shrink")
    setTimeout(() => {
        img.classList.remove("shrink")
    }, 50)
}

function unHideMenu() {
    let e = document.getElementById("helpMenu")
    e.classList.remove("hidden")
}

function hideMenu() {
    let e = document.getElementById("helpMenu")
    e.classList.add("hidden")
}




//   let totalPoints = 0;    
//   let clickValue = 1;      
//   let upgradesInPlay = 0;  


const pointsFill = document.getElementById("pointsFill");
const clickStars = document.getElementById("clickStars");
const upgradeDots = document.getElementById("upgradeDots");


function renderScoreboard() {
    const segmentMax = 200;
    //const progress = player.numClicks % segmentMax;
    //const percent = (progress / segmentMax) * 100;
    //pointsFill.style.width = percent + "%";


    clickStars.innerHTML = "";
    for (let i = 0; i < player.numUpgradeClick; i++) {
        const star = document.createElement("span");
        star.textContent = "⭐";
        clickStars.appendChild(star);
    }


    upgradeDots.innerHTML = "";
    for (let i = 0; i < player.numAutoClickSpeed; i++) {
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
