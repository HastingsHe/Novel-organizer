// Event listener for the Search button
document.getElementById("search-btn").addEventListener("click", function () {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const elements = document.querySelectorAll(".collapsible-content p, .collapsible-content li, .collapsible-content h3");
    
    // Loop through all elements and highlight search term
    elements.forEach(function (element) {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm) && searchTerm !== "") {
            element.innerHTML = element.textContent.replace(new RegExp(searchTerm, "gi"), (match) => `<span class="highlight">${match}</span>`);
        } else {
            element.innerHTML = element.textContent; // Reset to original text if no match
        }
    });

    // Show the Clear Search button and hide Search button
    document.getElementById("clear-btn").style.display = "inline-block";
    document.getElementById("search-btn").style.display = "none";
});

// Event listener for the Clear Search button
document.getElementById("clear-btn").addEventListener("click", function () {
    const elements = document.querySelectorAll(".collapsible-content p, .collapsible-content li, .collapsible-content h3");

    // Reset all highlighted terms
    elements.forEach(function (element) {
        element.innerHTML = element.textContent;
    });

    // Clear the search bar and show the Search button again
    document.getElementById("search").value = "";
    document.getElementById("clear-btn").style.display = "none";
    document.getElementById("search-btn").style.display = "inline-block";
});
