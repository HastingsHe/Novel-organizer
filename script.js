function searchContent() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let sections = document.querySelectorAll('.section');
    let regex = new RegExp(input, "gi");
    let found = false;

    if (input.trim() === "") {
        // Show all sections if search box is cleared
        sections.forEach(section => {
            section.style.display = 'block';
            section.innerHTML = section.innerHTML.replace(/<span class="highlight">|<\/span>/g, ''); // Remove all highlights
        });
        document.getElementById('search-results').innerHTML = "";
        return;
    }

    sections.forEach(section => {
        let content = section.innerHTML.replace(/<span class="highlight">|<\/span>/g, ''); // Clear previous highlights
        if (content.toLowerCase().includes(input)) {
            section.style.display = 'block';
            section.innerHTML = content.replace(regex, match => `<span class="highlight">${match}</span>`);
            found = true;
        } else {
            section.style.display = 'none';
        }
    });

    if (!found) {
        document.getElementById('search-results').innerHTML = `<p>No results found for "${input}".</p>`;
    } else {
        document.getElementById('search-results').innerHTML = `<p>Results found for "${input}".</p>`;
    }
}

function clearSearch() {
    document.getElementById('search-input').value = "";
    searchContent();
}
