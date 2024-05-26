document.addEventListener('DOMContentLoaded', () => {
    const emotionCards = document.querySelectorAll('.emotion-card');
    
    emotionCards.forEach(card => {
        card.addEventListener('click', () => {
            const emotion = card.getAttribute('data-emotion');
            showLoading();
            window.location.href = `emotion/${emotion}/${emotion}.html`;
        });
    });

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', filterSongs);
    }
});

function showLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('show');
    }
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.remove('show');
    }
}

function filterSongs() {
    const filter = this.value.toUpperCase();
    const songs = document.querySelectorAll('.playlist li');

    songs.forEach(song => {
        const text = song.textContent || song.innerText;
        song.style.display = text.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
    });
}
