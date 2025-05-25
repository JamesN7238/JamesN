const progressBar = document.getElementById('scroll-progress');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  // Calculate total scroll progress of the page (0 to 1)
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min(scrollTop / docHeight, 1);

  // Update progress bar width based on total scroll progress
  progressBar.style.width = (scrollPercent * 100) + '%';

  // For each section: fade in panel content when section is mostly visible
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const content = section.querySelector('.panel-content');

    // When section top is between 0 and 60% of viewport height — show content
    if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) {
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
    }
  });
});

// Trigger once on load
window.dispatchEvent(new Event('scroll'));
