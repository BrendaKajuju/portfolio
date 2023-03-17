// This function will scroll to the specified section when a navigation link is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // This code adds an event listener to each navigation link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });
  
