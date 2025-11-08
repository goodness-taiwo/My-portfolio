const button = document.getElementById('action-btn')
const message = document.getElementById('message')

button.addEventListener('click', () => {
    message.textContent = 'Say hi to me!'
    message.style.color = 'darkblue'
})