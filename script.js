// Function to search content based on user input
function searchContent() {
  const query = document.getElementById('searchBar').value.toLowerCase(); // Get the search query
  const cards = document.querySelectorAll('.card'); // Get all the cards on the page

  cards.forEach(card => {
    const cardContent = card.textContent.toLowerCase(); // Get the full text of the card, in lowercase

    // Check if the card's text content contains the search query
    if (cardContent.includes(query)) {
      card.style.display = 'block'; // Show the card if a match is found
    } else {
      card.style.display = 'none'; // Hide the card if no match is found
    }
  });
}
