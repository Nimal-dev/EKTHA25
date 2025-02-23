window.addEventListener('resize', function () {
    const textElement = document.getElementById('dynamicText');
    if (window.innerWidth <= 991) {
        textElement.textContent = "Techno Cultural Fest EKTHA";
    } else {
        textElement.textContent = "EKTHA";
    }
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('dynamicText');
    if (window.innerWidth <= 991) {
        textElement.textContent = "Techno Cultural Fest EKTHA";
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




// Countdown

function startCountdown() {
    // Set event date (March 5, 2025, 10:00 AM UTC)
    const eventDate = new Date(Date.UTC(2025, 2, 5, 10, 0, 0)).getTime(); 

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        console.log("Event Date (UTC):", eventDate);
        console.log("Current Time (UTC):", now);
        console.log("Time Left (ms):", timeLeft);

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

