// This script assumes each .section has a .panel inside it

function updatePanelsOnScroll() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const panel = section.querySelector('.panel');

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Section is in view
      const sectionHeight = rect.height;
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = visibleBottom - visibleTop;
      const percent = Math.max(0, Math.min(1, visibleBottom / sectionHeight));
      panel.style.width = (percent * 100) + '%';
    } else {
      // Section is not in view
      panel.style.width = '0%';
    }
  });
}

window.addEventListener('scroll', updatePanelsOnScroll);
window.addEventListener('resize', updatePanelsOnScroll);
document.addEventListener('DOMContentLoaded', updatePanelsOnScroll);
