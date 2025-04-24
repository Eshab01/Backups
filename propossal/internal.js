// Countdown timer function
function countdown() {
    const countdownElement = document.getElementById('countdown');
    const countdownDate = new Date();
    countdownDate.setFullYear(countdownDate.getFullYear() + 1); // Set countdown to 1 year from now
  
    const interval = setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Let the adventure begin!";
      }
    }
  }
  
  // Initialize countdown when the page loads
  window.onload = function() {
    countdown();
  }
  
  // Button click event for explore button
  document.getElementById('explore-btn').addEventListener('click', function() {
    alert("Get ready to embark on a wonderful journey together!");
    // Further actions to explore can be added here
  });
  