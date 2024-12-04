document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const sections = document.querySelectorAll('.content section');
  let results = [];

  sections.forEach(section => {
    const sectionText = section.textContent.toLowerCase();
    const sectionTitle = section.querySelector('h2').textContent.toLowerCase();

    if (sectionText.includes(query) || sectionTitle.includes(query)) {
      results.push(section);
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });

  const resultDisplay = document.getElementById('searchResults');
  if (results.length === 0) {
    resultDisplay.innerHTML = '<p>No results found.</p>';
  } else {
    resultDisplay.innerHTML = `<p>Found ${results.length} result(s).</p>`;
  }
});
