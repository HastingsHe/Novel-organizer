// Collapsible Functionality
document.querySelectorAll('.collapsible-header').forEach(item => {
    item.addEventListener('click', () => {
        let content = item.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Search Bar Functionality
document.getElementById('search').addEventListener('input', function() {
    let searchText = this.value.toLowerCase();
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let headerText = section.querySelector('h2').innerText.toLowerCase();
        let contentText = section.querySelector('.collapsible-content').innerText.toLowerCase();
        if (headerText.includes(searchText) || contentText.includes(searchText)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
