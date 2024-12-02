// JavaScript code to handle search functionality and showing only relevant results

document.getElementById("search-box").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase().trim();

    if (searchQuery === "") {
        document.querySelectorAll('.section .setting-detail, .section .character-detail, .section .theme-detail, .section .moment-detail, .section .symbol-detail').forEach(function(item) {
            item.style.display = 'block';
        });
        return;
    }

    let searchKeywords = searchQuery.split(" ");

    document.querySelectorAll('.section .setting-detail, .section .character-detail, .section .theme-detail, .section .moment-detail, .section .symbol-detail').forEach(function(item) {
        let itemText = item.textContent.toLowerCase();
        let matched = searchKeywords.every(function(keyword) {
            return itemText.includes(keyword);
        });

        if (matched) {
            item.style.display = 'block';
            highlightText(item, searchKeywords);
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("search-box").value = '';
    document.querySelectorAll('.section .setting-detail, .section .character-detail, .section .theme-detail, .section .moment-detail, .section .symbol-detail').forEach(function(item) {
        item.style.display = 'block';
    });
});

function highlightText(element, keywords) {
    let text = element.innerHTML;
    keywords.forEach(function(keyword) {
        let regex = new RegExp(`(${keyword})`, "gi");
        text = text.replace(regex, `<mark>$1</mark>`);
    });
    element.innerHTML = text;
}
