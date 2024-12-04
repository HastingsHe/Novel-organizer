// Function to search content based on user input
function searchContent() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const cardContent = card.getAttribute('data-search').toLowerCase();
    
    // Show or hide card based on whether it matches the search query
    if (cardContent.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
