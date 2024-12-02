let audio; // Variabel global untuk audio

self.addEventListener('message', function (event) {
    if (event.data === 'play') {
        // Jika audio belum dibuat, buat objek audio baru
        if (!audio) {
            audio = new Audio('assets/sound/sound.mp3');
            audio.loop = true; // Atur audio untuk berulang
        }
        audio.play(); // Mainkan audio
    } else if (event.data === 'pause') {
        if (audio) {
            audio.pause(); // Hentikan audio
        }
    }
});
