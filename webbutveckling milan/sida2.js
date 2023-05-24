function animateVisibleSections() {
    var sections = document.getElementsByClassName("animated-section");
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.getBoundingClientRect().top;
      var sectionBottom = section.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight && sectionBottom > 0) {
        section.classList.add("animated");
      } else {
        section.classList.remove("animated");
      }
    }
  }
  
  window.addEventListener("scroll", animateVisibleSections);
  window.addEventListener("load", animateVisibleSections);


  // Funktion för att visa eller dölja textrutan med korrekt länk
function toggleTextModal(event) {
  var textModal = document.querySelector(".text-modal");
  var link = event.target.dataset.link;

  if (!textModal) {
    // Skapa en ny textruta
    textModal = document.createElement("a");
    textModal.className = "text-modal";
    textModal.href = link;
    textModal.target = "_blank";
    textModal.innerHTML = "Fortsätt till artikeln";

    // Lägg till textrutan i sidokroppen
    document.body.appendChild(textModal);
  } else {
    // Ta bort textrutan
    document.body.removeChild(textModal);
  }
}

// Lyssna på klickhändelser för "Läs mer"-knapparna
var readMoreButtons = document.getElementsByClassName("read-more-btn");
for (var i = 0; i < readMoreButtons.length; i++) {
  var button = readMoreButtons[i];
  button.addEventListener("click", toggleTextModal);
}

  