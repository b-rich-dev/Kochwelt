
function sendMail(event) {
    event.preventDefault(); // Verhindert das Absenden, bevor geprüft wird

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Bitte trage deinen Namen ein!");
        return; // Stoppt die Funktion hier
    }

    if (message === "") {
        alert("Bitte schreibe eine Nachricht!");
        return; // Stoppt die Funktion hier
    }

    // Daten sammeln und absenden
    fetch("https://formspree.io/f/movewbgn", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html"; // Weiterleitung nach erfolgreichem Versand
    }).catch((error) => {
        console.log(error);
    });
}