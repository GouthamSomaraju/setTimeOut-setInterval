let countdown = 10; // Starting countdown value
const countdownElement = document.getElementById("countdown");
const newYearMessage = document.getElementById("newYearMessage");
const messageElement = document.getElementById("message");

// Function to update the countdown and handle transitions
function updateCountdown() {
  countdownElement.textContent = countdown;

  if (countdown === 0) {
    // When countdown reaches zero, hide it
    countdownElement.style.display = "none";

    // Show Happy New Year message
    newYearMessage.style.display = "block";

    // After 5 seconds, show additional message
    setTimeout(() => {
      messageElement.textContent = "Wishing you a fantastic year ahead!";
    }, 3000); // 5 seconds delay for the message

    // Stop the countdown
    clearInterval(timerInterval);
  }

  countdown--; // Decrease countdown
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
