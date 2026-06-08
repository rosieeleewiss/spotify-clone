const contextMenu = document.getElementById('custom-context-menu');
const targets = document.querySelectorAll('.context-target');

// Sağ tık menüsünü tetikle
targets.forEach(target => {
    target.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Tarayıcının orijinal sağ tık menüsünü engelle
        
        // Tıklanan satırı görsel olarak seçili yap (Arka planı hafif açılır)
        targets.forEach(t => t.classList.remove('selected-active'));
        this.classList.add('selected-active');

        // Fare koordinatlarını al
        let posX = e.clientX;
        let posY = e.clientY;

        // Menünün ekran kenarlarına taşmasını engelleme kontrolü
        const menuWidth = contextMenu.offsetWidth || 240;
        const menuHeight = contextMenu.offsetHeight || 400;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (posX + menuWidth > windowWidth) {
            posX = windowWidth - menuWidth - 10;
        }
        if (posY + menuHeight > windowHeight) {
            posY = windowHeight - menuHeight - 10;
        }

        // Menüyü konumlandır ve göster
        contextMenu.style.left = `${posX}px`;
        contextMenu.style.top = `${posY}px`;
        contextMenu.style.display = 'block';
    });
});

// Ekranda başka bir yere sol tıklandığında menüyü gizle
document.addEventListener('click', function(e) {
    if (!contextMenu.contains(e.target)) {
        hideContextMenu();
    }
});

// ESC tuşuna basıldığında menüyü gizle
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideContextMenu();
    }
});

function hideContextMenu() {
    contextMenu.style.display = 'none';
    targets.forEach(t => t.classList.remove('selected-active'));
}

// Menüdeki butonlara basıldığında ne olacağını buraya yazabilirsin
contextMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
        if (!this.classList.contains('disabled')) {
            console.log(`${this.textContent.trim()} tıklandı!`);
            hideContextMenu();
        }
    });
});
