function playSound() {
    var audio = new Audio('assets/sound/sound.mp3');
    audio.loop = true; // Agar audio berulang
    audio.play().catch(function(error) {
        console.log("Autoplay error:", error);
    });

    // Simpan audio di window agar bisa diakses global
    window.currentAudio = audio;
    localStorage.setItem('isPlaying', 'true');
}

// Saat halaman dimuat, cek apakah audio harus diputar
window.onload = function() {
    if (localStorage.getItem('isPlaying') === 'true') {
        playSound();
    } else {
        document.getElementById('playSoundButton').style.display = 'block';
    }
};

window.onload = function() {
    if (localStorage.getItem('isPlaying') === 'true') {
        var audio = new Audio('assets/sound/sound.mp3');
        audio.loop = true;
        audio.play().catch(function(error) {
            console.log("Autoplay error:", error);
        });
        window.currentAudio = audio;
    }
};

// Event untuk menghentikan audio saat meninggalkan halaman
window.onbeforeunload = function() {
    if (window.currentAudio) {
        window.currentAudio.pause();
    }
};