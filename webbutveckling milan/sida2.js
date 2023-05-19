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
  