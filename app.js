 // Search Box Toggle
 document.getElementById('search-toggle').addEventListener('click', function () {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('active');
});

// Real-time Search (Dummy Example)
document.getElementById('search-input').addEventListener('input', function () {
    const searchResults = document.getElementById('search-results');
    const query = this.value.trim().toLowerCase();
    if (query) {
        searchResults.innerHTML = `
            <div><a href="#">Product 1 matching "${query}"</a></div>
            <div><a href="#">Product 2 matching "${query}"</a></div>
        `;
    } else {
        searchResults.innerHTML = '';
    }
});



