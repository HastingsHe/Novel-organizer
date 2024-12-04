document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");
  const searchResults = document.getElementById("searchResults");
  const sections = document.querySelectorAll(".content section");

  // Function to perform the search
  function performSearch() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear previous results

    if (query.trim() === "") {
      searchResults.innerHTML = "Please enter a search query.";
      return;
    }

    let matches = [];
    
    // Loop through each section to check if it matches the query
    sections.forEach(section => {
      const sectionTitle = section.querySelector("h2").textContent.toLowerCase();
      const sectionContent = section.textContent.toLowerCase();

      if (sectionTitle.includes(query) || sectionContent.includes(query)) {
        matches.push(section);
        section.style.backgroundColor = "#f0f8ff"; // Highlight matching section
      } else {
        section.style.backgroundColor = ""; // Reset background color if no match
      }
    });

    if (matches.length > 0) {
      searchResults.innerHTML = `${matches.length} match(es) found.`;
    } else {
      searchResults.innerHTML = "No matches found.";
    }
  }

  // Search button click event
  searchButton.addEventListener("click", function() {
    performSearch();
  });

  // Clear search button click event
  clearSearchButton.addEventListener("click", function() {
    searchInput.value = "";  // Clear the search input
    searchResults.innerHTML = "";  // Clear the search results
    sections.forEach(section => {
      section.style.backgroundColor = "";  // Reset highlights
    });
  });
});
