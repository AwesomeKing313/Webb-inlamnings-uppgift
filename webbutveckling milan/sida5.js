// Hitta formuläret och meddelanderutan
const form = document.getElementById("membership-form");
const successMessage = document.getElementById("success-message");

// Lyssna på "submit" händelsen för formuläret
form.addEventListener("submit", function(event) {
  // Förhindra standardbeteendet för formulärhändelsen (att skicka data och ladda om sidan)
  event.preventDefault();

  // Visa meddelanderutan
  successMessage.classList.remove("hidden");
});  