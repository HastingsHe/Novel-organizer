document.getElementById('searchBar').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase(); // Convert user input to lowercase
  const sections = document.querySelectorAll('main section'); // Get all sections in the main content

  sections.forEach(section => {
    const items = section.querySelectorAll('li'); // Get all list items within each section
    let hasMatch = false;

    items.forEach(item => {
      const text = item.textContent.toLowerCase(); // Convert item text to lowercase for comparison
      if (text.includes(query)) {
        item.style.display = ''; // Show items that match
        hasMatch = true;
      } else {
        item.style.display = 'none'; // Hide non-matching items
      }
    });

    // Show or hide the section based on whether it contains matching items
    section.style.display = hasMatch ? '' : 'none';
  });
});
