// Function to search content based on user input
function searchContent() {
  const query = document.getElementById('searchBar').value.toLowerCase();  // Get the search query and convert to lowercase
  const cards = document.querySelectorAll('.card');  // Get all cards on the page

  // Iterate through each card
  cards.forEach(card => {
    const cardContent = card.textContent.toLowerCase();  // Get the text content of the card, in lowercase

    // If the query is found within the card's content, show it; otherwise, hide it
    if (cardContent.includes(query)) {
      card.style.display = 'block';  // Show the card
    } else {
      card.style.display = 'none';  // Hide the card
    }
  });
}
