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
// Function to highlight the keyword in the content
function highlightText(keyword) {
  // Reset the previous highlights by removing the highlight class
  const highlightedText = document.querySelectorAll('.highlight');
  highlightedText.forEach((el) => {
    el.classList.remove('highlight');
  });

  // If there's no keyword, stop the function
  if (!keyword) return;

  // Get all the text content that you want to search within
  const content = document.body;

  // Regular expression for case-insensitive searching of the keyword
  const regex = new RegExp(`(${keyword})`, 'gi');

  // Function to highlight text
  function highlightNode(node) {
    if (node.nodeType === 3) { // Only text nodes
      const match = node.nodeValue.match(regex);
      if (match) {
        const span = document.createElement('span');
        span.classList.add('highlight');
        const replacement = node.nodeValue.replace(regex, `<span class="highlight">$1</span>`);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = replacement;
        node.parentNode.replaceChild(tempDiv.firstChild, node);
      }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
      // Recursively check child nodes (skip script and style elements)
      for (let i = 0; i < node.childNodes.length; i++) {
        highlightNode(node.childNodes[i]);
      }
    }
  }

  // Start highlighting from the body
  highlightNode(content);
}

// Event listener for the search button click
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function() {
  const keyword = document.getElementById("searchInput").value;
  highlightText(keyword);
});

// Event listener for the clear button click
const clearButton = document.getElementById("clearSearchButton");
clearButton.addEventListener("click", function() {
  document.getElementById("searchInput").value = ''; // Clear the input field
  highlightText(''); // Remove all highlights
});

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
