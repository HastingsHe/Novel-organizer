document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");
  const searchResults = document.getElementById("searchResults");
  const sections = document.querySelectorAll(".content section");

  function searchContent() {
        let input = document.getElementById('search-input').value.toLowerCase();
        let sections = document.querySelectorAll('.section, .section h3, .section p, .quote');
        let regex = new RegExp(input, "gi");
        let found = false;

        sections.forEach(section => {
            // Remove previous highlights
            section.innerHTML = section.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
            
            if (input && section.textContent.toLowerCase().includes(input)) {
                // Highlight search matches
                section.innerHTML = section.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
                section.style.display = 'block';
                found = true;
            } else {
                section.style.display = 'none';
            }
        });

        if (!found) {
            document.querySelectorAll('.section h2').forEach(header => header.style.display = 'none');
        }
    }

    function bookmarkSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
