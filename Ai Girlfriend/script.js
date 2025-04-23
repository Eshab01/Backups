// script.js
const chatbot = {
    name: 'Luna',
    age: 25,
    preferences: {
        favoriteColor: 'blue',
        hobbies: ['reading', 'coding', 'music']
    },
    chatHistory: []
};

document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage('You', userInput);
        chatbot.chatHistory.push({ sender: 'You', message: userInput });
        getAIResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAIResponse(userInput) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
            prompt: `You are chatting with ${chatbot.name}, a ${chatbot.age}-year-old AI with preferences: ${JSON.stringify(chatbot.preferences)}. User said: ${userInput}`,
            max_tokens: 150
        })
    });
    const data = await response.json();
    const aiMessage = data.choices[0].text.trim();
    addMessage(chatbot.name, aiMessage);
    chatbot.chatHistory.push({ sender: chatbot.name, message: aiMessage });
}
// Save chat history to localStorage
function saveChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(chatbot.chatHistory));
}

// Load chat history from localStorage
function loadChatHistory() {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
        chatbot.chatHistory = JSON.parse(savedHistory);
        chatbot.chatHistory.forEach(chat => addMessage(chat.sender, chat.message));
    }
}

// Call loadChatHistory on page load
window.onload = loadChatHistory;

// Save chat history whenever a new message is added
function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    saveChatHistory();
}
