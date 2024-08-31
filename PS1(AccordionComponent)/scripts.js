function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const accordionItems = document.querySelectorAll('.accordion-content');

  // Close other open sections
  accordionItems.forEach(item => {
      if (item !== content) {
          item.style.maxHeight = null;
          item.classList.remove('active');
      }
  });

  // Toggle the clicked section
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('active');
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add('active');
  }
}
