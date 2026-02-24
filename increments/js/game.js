/*
Marco Carnegie
Hanzhi

January 24th 2026
Main JS file
*/

const player = {
    numClicks: 0,
    numAutoClickSpeed: 0,
    numUpgradeClick: 0,
}
const pointsFill = document.getElementById("pointsFill");
const clickStars = document.getElementById("clickStars");
const upgradeDots = document.getElementById("upgradeDots");
let autoClickSpeedPrice = 50;
let upgradeClickPrice = 5;
let interval;

/*
Increases number of cow points based on upgrade power and rewards
trophies based on certain score
*/
document.getElementById("cow").addEventListener("click", () => {
    player.numClicks += 1 + (player.numUpgradeClick)

    document.getElementById("pointsFill").innerHTML = player.numClicks



    Select(document.getElementById("cow"))
    checkPoints();


})

/*creates and increases autoclicker speed and price based on the number of auto click upgrades
and caps the number of upgrades at 10. Also changes store text and adds trophies based on
number of upgrades  */
document.getElementById("autoClickSpeed").addEventListener("click", () => {
    if (player.numClicks >= autoClickSpeedPrice && (player.numAutoClickSpeed * 100) < 1000) {
        player.numClicks -= autoClickSpeedPrice
        document.getElementById("pointsFill").innerHTML = player.numClicks
        player.numAutoClickSpeed++;
        autoClickSpeedPrice = Math.floor(50 * (Math.pow(1.15, player.numAutoClickSpeed)))
        document.getElementById("autoPrice").innerHTML = autoClickSpeedPrice
        if (interval != null) {
            clearInterval(interval)
        }

        interval = setInterval(() => {
            player.numClicks++
            document.getElementById("pointsFill").innerHTML = player.numClicks
            checkPoints();
        }, 1000 - (player.numAutoClickSpeed * 100))
    } else if ((player.numAutoClickSpeed * 100) >= 1000) {
        document.getElementById("5000Upgrade").classList.add("hidden")
        document.getElementById("autoPrice").classList.add("hidden")
        document.getElementById("price").classList.add("hidden")
        document.getElementById("max").classList.remove("hidden")
    }

    if (player.numAutoClickSpeed == 1) {
        document.getElementById("5000noUpgrade").classList.add("hidden")
        document.getElementById("5000Upgrade").classList.remove("hidden")
    }

    if (player.numAutoClickSpeed == 5 && document.getElementById("t3").classList.contains("hidden")) {
        document.getElementById("t3").classList.remove("hidden")
        trophyPop()
    }

    renderScoreboard();
    Select(document.getElementById("autoClickSpeed"))
})

/*upgrades the amount of score each click does by adding 1 to the number of clicks and
changes price of upgrade. it also gives trophies based on number of upgrades*/

document.getElementById("upgradeClick").addEventListener("click", () => {
    if (player.numClicks >= upgradeClickPrice) {
        player.numClicks -= upgradeClickPrice;
        document.getElementById("pointsFill").innerHTML = player.numClicks
        player.numUpgradeClick++;
        upgradeClickPrice += Math.floor(5 * (Math.pow(1.15, player.numUpgradeClick)))
        document.getElementById("clickPrice").innerHTML = upgradeClickPrice

    }
    if (player.numUpgradeClick == 1 && document.getElementById("t1").classList.contains("hidden")) {
        document.getElementById("t1").classList.remove("hidden")
        trophyPop()
    }
    if (player.numUpgradeClick == 5 && document.getElementById("t2").classList.contains("hidden")) {
        document.getElementById("t2").classList.remove("hidden")
        trophyPop()
    }
    renderScoreboard();
    Select(document.getElementById("upgradeClick"))
})

/**
* Adds the class shrink to a given element and removes it after 50 ms
* This creates a responsive effect for selecting something
*/

function Select(img) {
    img.classList.add("shrink")
    setTimeout(() => {
        img.classList.remove("shrink")
    }, 50)
}

/* removes the hidden class from the menu to display it*/
function unHideMenu(e) {
    e.classList.remove("hidden")
    checkTrophies();
}

/* adds the hidden class to the menu to remove it*/
function hideMenu(e) {
    e.classList.add("hidden")
    checkTrophies();
}

/*checks if player reached certain milestones */
function checkPoints() {
    if (player.numClicks >= 50000 && document.getElementById("t6").classList.contains("hidden")) {
        document.getElementById("t6").classList.remove("hidden")
        trophyPop()
    } else if (player.numClicks >= 25000 && document.getElementById("t5").classList.contains("hidden")) {
        document.getElementById("t5").classList.remove("hidden")
        trophyPop()
    } else if (player.numClicks >= 10000 && document.getElementById("t4").classList.contains("hidden")) {
        document.getElementById("t4").classList.remove("hidden")
        trophyPop();
    }
}

/*gets creats a fading effect for the pop up menu*/
function trophyPop() {
    let e = document.getElementById("trophyPop");
    e.style.opacity = '1';
    e.classList.remove("hidden");

    setTimeout(() => {
        e.style.transition = 'opacity 0.5s ease';
        e.style.opacity = '0';

    }, 1500)
    setTimeout(() => {
        e.classList.add("hidden")

    }, 2000)




}

/*renders the score board, adds stars and dots based on number of upgrades */
function renderScoreboard() {


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

