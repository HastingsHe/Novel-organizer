document.addEventListener("DOMContentLoaded", function () {

    // Search button functionality
    document.getElementById("search-btn").addEventListener("click", function () {
        performSearch();
    });

    // Search when 'Enter' key is pressed
    document.getElementById("search-box").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            performSearch();
        }
    });

    // Clear search button functionality
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("search-box").value = "";  // Clear the search box
        showAllSections();  // Show all sections
    });

    // Function to perform the search
    function performSearch() {
        let searchQuery = document.getElementById("search-box").value.trim().toLowerCase();

        if (searchQuery === "") {
            showAllSections(); // If search is empty, show all sections
            return;
        }

        let sections = document.querySelectorAll('.section');

        sections.forEach(function (section) {
            let isSectionVisible = false; // Tracks if any relevant detail is found within this section
            let detailDivs = section.querySelectorAll('.setting-detail, .character-detail, .theme-detail, .symbol-detail, .moment-detail');
            
            detailDivs.forEach(function (detail) {
                let textContent = detail.textContent.toLowerCase();
                if (textContent.includes(searchQuery)) {
                    // Show the relevant detail and highlight the keyword
                    isSectionVisible = true;
                    highlightText(detail, searchQuery);
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';  // Hide irrelevant details
                }
            });

            // Show or hide the entire section based on whether there's a relevant detail
            section.style.display = isSectionVisible ? 'block' : 'none';
        });
    }

    // Function to highlight the search term in the text
    function highlightText(element, searchQuery) {
        let text = element.innerHTML;
        let regex = new RegExp("(" + searchQuery + ")", "gi");
        let highlightedText = text.replace(regex, "<span class='highlight'>$1</span>");
        element.innerHTML = highlightedText;
    }

    // Function to show all sections again (when clear search is pressed)
    function showAllSections() {
        let sections = document.querySelectorAll('.section');
        sections.forEach(function (section) {
            let detailDivs = section.querySelectorAll('.setting-detail, .character-detail, .theme-detail, .symbol-detail, .moment-detail');
            detailDivs.forEach(function (detail) {
                detail.style.display = 'block';  // Show all the detail divs
                // Remove any existing highlights
                detail.innerHTML = detail.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
            });
            section.style.display = 'block';  // Show the section itself
        });
    }

});
