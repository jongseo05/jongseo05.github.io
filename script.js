document.addEventListener('DOMContentLoaded', () => {
    const emotionCards = document.querySelectorAll('.emotion-card');
    
    emotionCards.forEach(card => {
        card.addEventListener('click', () => {
            const emotion = card.getAttribute('data-emotion');
            window.location.href = `${emotion}.html`;
        });
    });
});
