const messages = [
    "Please reconsider...",
    "I really hope you'll say yes...",
    "Give it another thought, please...",
    "I'll be waiting for your decision...",
    "I believe in us, don't you?",
    "You're worth the wait...",
    "Let's give it a chance...",
    "I promise it'll be worth it...",
    "I'll be patient, but please say yes...",
    "I can't imagine my life without you..."
  ];
  
  let messageIndex = 0;
  
  document.getElementById('proposal-btn').addEventListener('click', function() {
    alert("Yay! You said yes! Get ready for an adventure together!");
    celebrate();
  });
  
  document.getElementById('maybe-later-btn').addEventListener('click', function() {
    alert("I'll wait for you! Because that's what people in love do, Hainaaaa!!!!");
  });
  
  document.getElementById('no-btn').addEventListener('click', function() {
    showMessage(messages[messageIndex]);
    messageIndex++;
    if (messageIndex >= messages.length) {
      messageIndex = 0;
    }
  });
  
  function showMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message');
    messageBox.textContent = message;
    document.body.appendChild(messageBox);
  
    setTimeout(function() {
      messageBox.remove();
    }, 3000);
  }
  
  function celebrate() {
    const proposalBox = document.getElementById('proposal-box');
    proposalBox.style.animation = "fadeOut 1s forwards";
  
    const proposalContainer = document.getElementById('proposal-container');
    proposalContainer.style.animation = "slideOut 1s forwards";
  
    setTimeout(function() {
      window.location.href = "C:\Users\eshab\OneDrive\Desktop\VS Code\propossal\Internal.html";
    }, 1000);
  }
  
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  