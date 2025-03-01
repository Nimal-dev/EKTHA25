
// Countdown Timer    //*********************Keep the timer function on top************************* */
function startCountdown() {
    // Set event date (March 5, 2025, 10:00 AM UTC)
    const eventDate = new Date(Date.UTC(2025, 2, 5, 10, 0, 0)).getTime(); 

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {                                                    
            document.querySelector(".countdown-timer").innerHTML = "<h3>Event Started!</h3>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}

document.addEventListener("DOMContentLoaded", startCountdown);



// Changing Text DATE 
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "UKFCET",
    "Presents",
    "EKTHA'25",
    "MARCH",
    "5,6,7"
];

const morphTime = 1;
const cooldownTime = 0.55;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();






window.addEventListener('resize', function () {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.textContent = window.innerWidth <= 991 ? "Techno Cultural Fest EKTHA" : "EKTHA";
    }
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.textContent = window.innerWidth <= 991 ? "Techno Cultural Fest EKTHA" : "EKTHA";
    }
});

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Ensure the page loads at the top
window.onload = function () {
    window.scrollTo(0, 0);
};

//teams
document.getElementById("bookNow").addEventListener("click", function() {
    alert("Booking functionality coming soon!");
});



// Logos Section scroll


function flipCard(card) {
    card.classList.toggle('flipped');
}