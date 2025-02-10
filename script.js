document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");
  const searchInput = document.getElementById("searchInput");
  const articles = document.querySelectorAll(".section-content article");

  // Function to perform search and filter articles based on query
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    articles.forEach(article => {
      // Show article if query is empty or if article text includes the query
      if (query === "" || article.textContent.toLowerCase().includes(query)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", performSearch);

  clearSearchButton.addEventListener("click", function() {
    searchInput.value = "";
    performSearch();
  });

  // Enable search on pressing the "Enter" key in the search input
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});
