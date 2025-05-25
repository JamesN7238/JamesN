const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const panel = section.querySelector('.panel');
    const content = section.querySelector('.panel-content');

    const sectionHeight = rect.height;

    let progress = 0;

    if (rect.bottom > 0 && rect.top < viewportHeight) {
      // Calculate visible portion of section in viewport
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      progress = visibleHeight / sectionHeight;
      progress = Math.min(Math.max(progress, 0), 1);
    }

    // Set red panel width (left to right fill)
    panel.style.width = (progress * 100) + '%';

    // Fade in content after 20% fill
    if (progress > 0.2) {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    } else {
      content.style.opacity = '0';
      content.style.transform = 'translateY(20px)';
    }
  });
});

// Trigger initial scroll event on load
window.dispatchEvent(new Event('scroll'));
