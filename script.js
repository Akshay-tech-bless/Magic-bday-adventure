const birthdayData = {
    name: "Aarav",
    age: 6,
    message: "Happy Birthday! Have a magical day! 🎉",
    photo: "assets/images/birthday-child.jpg"
};

function showScene(scene){

    scene.style.display = "block";

    scene.classList.remove("fadeOut");

    scene.classList.add("fadeIn");

}

function hideScene(scene){

    scene.classList.remove("fadeIn");

    scene.classList.add("fadeOut");

    setTimeout(()=>{

        scene.style.display="none";

    },800);

}
document.getElementById("childName").textContent = childName;

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const giftScreen = document.getElementById("giftScreen");

startBtn.addEventListener("click", () => {

    hideScene(welcome);

setTimeout(()=>{

    showScene(giftScreen);

},800);
});

document.getElementById("gift").addEventListener("click", () => {

    document.getElementById("gift").style.display = "none";

document.querySelector("#giftScreen h2").style.display = "none";

showScene(document.getElementById("unicornScreen"));

});

document.getElementById("continueBtn").addEventListener("click", () => {

    hideScene(document.getElementById("unicornScreen"));

setTimeout(()=>{

    showScene(document.getElementById("starGame"));

},800);

});

let score = 0;

const stars = document.querySelectorAll(".star");

stars.forEach(star => {

    star.addEventListener("click", () => {

        star.style.display = "none";

        score++;

        document.getElementById("score").textContent = score;

        if(score === 5){

            setTimeout(() => {

                document.getElementById("starGame").style.display = "none";

document.getElementById("treasureScene").style.display = "block";

            },300);

        }

    });

});

document.getElementById("treasureBox").addEventListener("click", () => {

    document.getElementById("treasureScene").style.display = "none";

    document.getElementById("cakeScene").style.display = "block";

});

let litCandles = 0;

const candles = document.querySelectorAll(".candle");

candles.forEach(candle => {

    candle.addEventListener("click", () => {

        if(!candle.classList.contains("lit")){

            candle.classList.add("lit");

            litCandles++;

        }

        if(litCandles === candles.length){

           document.getElementById("celebrationMessage").style.display="block";

document.getElementById("finishBtn").style.display="inline-block";

createConfetti();


        }

    });

});

function createConfetti(){

const colors = [
"#ff4d6d",
"#ffd93d",
"#4ecdc4",
"#9b5de5",
"#00c853"
];

const container =
document.querySelector(".confetti-container");

for(let i=0;i<80;i++){

const confetti =
document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left =
Math.random()*100+"vw";

confetti.style.background =
colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDelay =
Math.random()*2+"s";

container.appendChild(confetti);

}

}

document.getElementById("finishBtn").addEventListener("click",()=>{

document.getElementById("cakeScene").style.display="none";

document.getElementById("finalScene").style.display="flex";

document.getElementById("heroName").textContent =
`${childName} (${childAge} Years)`;

});

document.getElementById("restartBtn").addEventListener("click",()=>{

location.reload();

});

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },3000);

});

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 3000);

});

document.getElementById("childName").textContent = birthdayData.name;

document.getElementById("heroName").textContent =
`${birthdayData.name} (${birthdayData.age} Years)`;

document.getElementById("customMessage").textContent =
birthdayData.message;

document.getElementById("heroPhoto").src =
birthdayData.photo;