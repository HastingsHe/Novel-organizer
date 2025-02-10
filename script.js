document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");
  const searchInput = document.getElementById("searchInput");
  const articles = document.querySelectorAll(".section-content article");

  // Save the original HTML content for each article
  articles.forEach(article => {
    article.dataset.original = article.innerHTML;
  });

  // Function to remove any previous highlights
  function removeHighlights(article) {
    article.innerHTML = article.dataset.original;
  }

  // Function to highlight the keyword inside an article
  function highlightText(article, keyword) {
    if (!keyword.trim()) return;
    // Create a case-insensitive regular expression for the keyword
    const regex = new RegExp(`(${keyword})`, 'gi');
    article.innerHTML = article.innerHTML.replace(regex, '<span class="highlight">$1</span>');
  }

  // Perform search and highlight the keyword in the articles
  function performSearch() {
    const query = searchInput.value.trim();
    articles.forEach(article => {
      // Reset the article content
      removeHighlights(article);
      if (query === "") {
        article.style.display = "block";
      } else if (article.textContent.toLowerCase().includes(query.toLowerCase())) {
        article.style.display = "block";
        highlightText(article, query);
      } else {
        article.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", performSearch);

  clearSearchButton.addEventListener("click", function() {
    searchInput.value = "";
    articles.forEach(article => {
      removeHighlights(article);
      article.style.display = "block";
    });
  });

  // Enable search on pressing the "Enter" key in the search input
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});
