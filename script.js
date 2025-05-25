const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const panel = section.querySelector('.panel');

    // How far top of section is from viewport top
    const top = rect.top;

    // Calculate scroll progress within this section (0 to 1)
    // When top = viewportHeight => progress = 0 (just below viewport)
    // When top = 0 => progress = 1 (top aligned with viewport top)
    // When top < 0 (section scrolled past top), progress > 1, clamp to 1 max
    let progress = 1 - top / viewportHeight;
    progress = Math.min(Math.max(progress, 0), 1); // clamp 0..1

    // Set panel width to progress * 100%
    panel.style.width = (progress * 100) + '%';

    // Toggle panel-content visibility based on progress threshold
    if (progress > 0.1) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
