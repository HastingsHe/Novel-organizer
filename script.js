document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll(".content section");

    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (text.includes(query)) {
        section.style.display = "block";
        highlightText(section, query);
      } else {
        section.style.display = "none";
      }
    });
  }

  function highlightText(container, query) {
    const regex = new RegExp(`(${query})`, "gi");
    container.innerHTML = container.innerHTML.replace(/<span class="highlight">|<\/span>/g, "");
    container.innerHTML = container.innerHTML.replace(regex, '<span class="highlight">$1</span>');
  }

  searchButton.addEventListener("click", performSearch);

  clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    document.querySelectorAll(".content section").forEach(section => {
      section.style.display = "block";
      section.innerHTML = section.innerHTML.replace(/<span class="highlight">|<\/span>/g, "");
    });
  });
});
