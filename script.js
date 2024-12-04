// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll(".content section");

    // Hide search results if input is empty
    searchResults.innerHTML = '';

    if (query.trim() !== "") {
      let matches = [];

      // Loop through each section and check for a match
      sections.forEach(section => {
        const sectionTitle = section.querySelector("h2").textContent.toLowerCase();
        const sectionContent = section.textContent.toLowerCase();

        if (sectionTitle.includes(query) || sectionContent.includes(query)) {
          matches.push(section);
        }
      });

      // If matches found, highlight them and display results
      if (matches.length > 0) {
        matches.forEach(section => {
          section.style.backgroundColor = "#f0f8ff"; // Light blue background for matches
        });
        searchResults.innerHTML = `${matches.length} match(es) found.`;
      } else {
        searchResults.innerHTML = "No matches found.";
      }
    }

    // If the search query is empty, remove highlights
    if (query.trim() === "") {
      sections.forEach(section => {
        section.style.backgroundColor = "";
      });
    }
  });
});
