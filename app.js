// İleride MP3 dosyalarını çalmak için kullanacağımız temel yapı
const audioPlayer = new Audio();
const playButton = document.querySelector('.play-btn');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        // audioPlayer.pause(); (Şarkı yüklendiğinde çalışacak)
        playButton.textContent = '▶';
        isPlaying = false;
    } else {
        // audioPlayer.play();
        playButton.textContent = '⏸'; // Durdurma ikonu
        isPlaying = true;
    }
});
