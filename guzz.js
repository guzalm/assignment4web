function showSuccessMessage() {
  alert("You have successfully subscribed to our newsletter!");
}
function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var messageText = messageInput.value.trim();

  if (messageText !== "") {
    var chatMessages = document.getElementById("chat-messages");
    var newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = "You: " + messageText;
    chatMessages.appendChild(newMessage);

    // You can also send the message to a server or a chat service provider here

    messageInput.value = "";
  }
}
