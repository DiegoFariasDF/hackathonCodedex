const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const userMessage = messageInput.value;
    if (userMessage.trim() === '') return;

    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = `Usuário: ${userMessage}`;
    chatArea.appendChild(userMessageElement);

    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('message', 'ai-message');
    aiMessageElement.textContent = `AI: Desculpe, mas minha internet discada dos anos 90 demoraria muito para responder. Por favor aguarde ate 2024`;
    chatArea.appendChild(aiMessageElement);

    chatArea.scrollTop = chatArea.scrollHeight;

    messageInput.value = '';
}

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
