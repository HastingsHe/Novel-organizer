// script.js
document.addEventListener("DOMContentLoaded", function () {

    // Search button functionality
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-box").value.trim().toLowerCase();
        
        // If search query is not empty, process the search
        if (searchQuery !== "") {
            let sections = document.querySelectorAll('.section');
            
            sections.forEach(function(section) {
                let isFound = false;
                let detailDivs = section.querySelectorAll('.setting-detail, .character-detail, .theme-detail, .symbol-detail, .moment-detail');
                
                detailDivs.forEach(function(detail) {
                    let textContent = detail.textContent.toLowerCase();
                    if (textContent.includes(searchQuery)) {
                        // Show the relevant section and highlight the keyword
                        isFound = true;
                        highlightText(detail, searchQuery);
                    } else {
                        // Hide irrelevant details
                        detail.style.display = 'none';
                    }
                });

                // Show or hide the entire section based on the search results
                if (isFound) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        } else {
            // If search box is empty, show all sections
            showAllSections();
        }
    });

    // Clear search button functionality
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("search-box").value = "";  // Clear the search box
        showAllSections();  // Show all sections
    });

    // Function to highlight the search term in the text
    function highlightText(element, searchQuery) {
        let text = element.innerHTML;
        let regex = new RegExp("(" + searchQuery + ")", "gi");
        let highlightedText = text.replace(regex, "<span class='highlight'>$1</span>");
        element.innerHTML = highlightedText;
    }

    // Function to show all sections again
    function showAllSections() {
        let sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            let detailDivs = section.querySelectorAll('.setting-detail, .character-detail, .theme-detail, .symbol-detail, .moment-detail');
            detailDivs.forEach(function(detail) {
                detail.style.display = 'block';  // Show all the detail divs
                // Remove any existing highlights
                detail.innerHTML = detail.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
            });
            section.style.display = 'block';  // Show the section itself
        });
    }

});
