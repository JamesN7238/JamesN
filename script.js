const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const panel = section.querySelector('.panel');

    let progress = 1 - rect.top / viewportHeight;
    progress = Math.min(Math.max(progress, 0), 1);

    panel.style.width = (progress * 100) + '%';

    if (progress > 0.1) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
