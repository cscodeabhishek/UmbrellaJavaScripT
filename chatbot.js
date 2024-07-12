const ticketId = "exampleTicketId"; // Retrieve this dynamically

function showResumeChatButton() {
    const resumeChatButton = document.getElementById("resumeChat");
    const currentTime = new Date().getTime();
    const disposalTime = localStorage.getItem("disposalTime");

    if (disposalTime && currentTime - disposalTime < 15 * 60 * 1000) {
        resumeChatButton.style.display = "block";
    }
}
document.getElementById("resumeChat").addEventListener("click", () => {
    fetch("/resumeChat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketId }),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Chat resumed with ticket id: " + ticketId);
        });
});

document.getElementById("initiateChat").addEventListener("click", () => {
    // Logic to initiate a new chat
});

window.onload = showResumeChatButton;
