// Show Photo Info
function showPhotoInfo(index) {
    const photoBox = document.getElementById('photo-info-box');
    const photosContainer = photoBox.querySelector('.photos-container');
    const photoItems = photosContainer.querySelectorAll('.photo-item');

    // Define image sets for each index
    const imageSets = {
        1: [
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/resident-evil-every-playable-character-ranked.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
            "https://example.com/photo1-2.jpg",
            "https://example.com/photo1-3.jpg",
            "https://example.com/photo1-4.jpg",
            "https://example.com/photo1-5.jpg"
        ],
        2: [
            "https://example.com/photo2-1.jpg",
            "https://example.com/photo2-2.jpg",
            "https://example.com/photo2-3.jpg",
            "https://example.com/photo2-4.jpg",
            "https://example.com/photo2-5.jpg"
        ]
    };

    // Populate the photos container with the corresponding image set
    if (imageSets[index]) {
        photoItems.forEach((item, i) => {
            item.src = imageSets[index][i];
            item.alt = `Photo ${i + 1}`;
        });
    }

    // Display the photo info box
    photoBox.style.display = 'flex';
}

// Close Photo Info Box
function closePhotoInfo() {
    const photoBox = document.getElementById('photo-info-box');
    photoBox.style.display = 'none';
}
// Smooth Scroll Effect for Left and Right Tapes
document.addEventListener('DOMContentLoaded', () => {
    const leftTape = document.querySelector('.left-tape');
    const rightTape = document.querySelector('.right-tape');

    // Function to apply smooth scroll effect
    function applySmoothScroll(tape) {
        let currentY = 0; // Tracks the current scroll position

        tape.addEventListener('wheel', (e) => {
            e.preventDefault(); // Prevent default scrolling behavior

            // Calculate new scroll position based on deltaY
            const deltaY = e.deltaY;
            currentY += deltaY;

            // Apply smooth scrolling using transform
            tape.style.transform = `translateY(${currentY}px)`;
        });

        // Reset scroll position when mouse leaves the tape
        tape.addEventListener('mouseleave', () => {
            currentY = 0; // Reset scroll position
            tape.style.transform = 'translateY(0)';
        });
    }

    // Apply smooth scroll effect to both tapes
    applySmoothScroll(leftTape);
    applySmoothScroll(rightTape);
});
// i18next Initialization
i18next.init({
    lng: 'en', // Default language
    resources: {
        en: {
            translation: {
                welcomeTitle: "Welcome to Our Card Game!",
                welcomeDescription: "Join our Discord community and start playing today!",
                modalTitle: "Information",
                modalContent: "Amazing information here!",
                cardHeaders: [
                    "Card 1", "Card 2", "Card 3", "Card 4",
                    "Card 5", "Card 6", "Card 7", "Card 8",
                    "Card 9", "Card 10", "Card 11", "Card 12",
                    "Card 13", "Card 14", "Card 15", "Card 16"
                ],
                cardPlaceholder: "Hello Card"
            }
        },
        ar: {
            translation: {
                welcomeTitle: "مرحبًا بك في لعبة البطاقات الخاصة بنا!",
                welcomeDescription: "انضم إلى مجتمعنا على Discord وابدأ اللعب اليوم!",
                modalTitle: "معلومات",
                modalContent: "معلومات رائعة هنا!",
                cardHeaders: [
                    "البطاقة 1", "البطاقة 2", "البطاقة 3", "البطاقة 4",
                    "البطاقة 5", "البطاقة 6", "البطاقة 7", "البطاقة 8",
                    "البطاقة 9", "البطاقة 10", "البطاقة 11", "البطاقة 12",
                    "البطاقة 13", "البطاقة 14", "البطاقة 15", "البطاقة 16"
                ],
                cardPlaceholder: "مرحبًا بالبطاقة"
            }
        },
        ja: {
            translation: {
                welcomeTitle: "カードゲームへようこそ！",
                welcomeDescription: "Discordコミュニティに参加して、今日からプレイを始めましょう！",
                modalTitle: "情報",
                modalContent: "素晴らしい情報がここにあります！",
                cardHeaders: [
                    "カード 1", "カード 2", "カード 3", "カード 4",
                    "カード 5", "カード 6", "カード 7", "カード 8",
                    "カード 9", "カード 10", "カード 11", "カード 12",
                    "カード 13", "カード 14", "カード 15", "カード 16"
                ],
                cardPlaceholder: "こんにちはカード"
            }
        }
    }
});

// Change Language Function
function changeLanguage(lang) {
    i18next.changeLanguage(lang).then(() => {
        document.getElementById('welcome-title').innerText = i18next.t('welcomeTitle');
        document.getElementById('welcome-description').innerText = i18next.t('welcomeDescription');

        // Update card headers and placeholders
        const cardHeaders = i18next.t('cardHeaders');
        const cardPlaceholder = i18next.t('cardPlaceholder');

        // Update all card headers and placeholders
        document.querySelectorAll('.card h1').forEach((header, index) => {
            header.innerText = cardHeaders[index];
        });

        document.querySelectorAll('.card input').forEach(input => {
            input.placeholder = cardPlaceholder;
        });
    });
}

// Initialize default language
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('welcome-title').innerText = i18next.t('welcomeTitle');
    document.getElementById('welcome-description').innerText = i18next.t('welcomeDescription');
});
// Smooth Infinite Scroll Effect for Left and Right Tapes
document.addEventListener('DOMContentLoaded', () => {
    const leftTape = document.querySelector('.left-tape');
    const rightTape = document.querySelector('.right-tape');

    function applySmoothScroll(tape) {
        let currentY = 0;
        const images = Array.from(tape.querySelectorAll('img'));
        const totalImages = images.length;

        // Clone all images and append them to create a seamless loop
        images.forEach(img => tape.appendChild(img.cloneNode(true)));

        tape.addEventListener('wheel', (e) => {
            e.preventDefault();
            const deltaY = e.deltaY;
            currentY += deltaY;

            // Apply smooth scrolling using transform
            tape.style.transform = `translateY(${-currentY}px)`;

            // Reset scroll position when reaching the end of the cloned images
            if (Math.abs(currentY) >= totalImages * images[0].offsetHeight) {
                currentY = 0;
                tape.style.transition = 'none'; // Disable transition for instant reset
                tape.style.transform = 'translateY(0)';
                setTimeout(() => {
                    tape.style.transition = ''; // Re-enable transition after reset
                }, 50);
            }
        });
    }

    // Apply smooth scroll effect to both tapes
    applySmoothScroll(leftTape);
    applySmoothScroll(rightTape);
});
// Function to show the photo info box
// Function to show the photo info box
function showPhotoInfo(itemId) {
    const photoInfoBox = document.getElementById('photo-info-box');
    const photosContainer = document.querySelectorAll('.photo-item');

    // Define photo URLs for each shop item
    const shopPhotos = {
        1: [
            'https://via.placeholder.com/80x80?text=Shop+1+Photo+1',
            'https://via.placeholder.com/80x80?text=Shop+1+Photo+2',
            'https://via.placeholder.com/80x80?text=Shop+1+Photo+3',
            'https://via.placeholder.com/80x80?text=Shop+1+Photo+4',
            'https://via.placeholder.com/80x80?text=Shop+1+Photo+5'
        ],
        2: [
            'https://via.placeholder.com/80x80?text=Shop+2+Photo+1',
            'https://via.placeholder.com/80x80?text=Shop+2+Photo+2',
            'https://via.placeholder.com/80x80?text=Shop+2+Photo+3',
            'https://via.placeholder.com/80x80?text=Shop+2+Photo+4',
            'https://via.placeholder.com/80x80?text=Shop+2+Photo+5'
        ]
    };

    // Populate the photos container with the selected shop item's photos
    photosContainer.forEach((img, index) => {
        img.src = shopPhotos[itemId][index];
    });

    // Display the popup box
    photoInfoBox.style.display = 'flex';
}

// Function to close the photo info box
function closePhotoInfo() {
    const photoInfoBox = document.getElementById('photo-info-box');
    photoInfoBox.style.display = 'none';
}
// Show Photo Info
function showPhotoInfo(index) {
    const photoBox = document.getElementById('photo-info-box');
    const photosContainer = photoBox.querySelector('.photos-container');
    const photoItems = photosContainer.querySelectorAll('.photo-item');

    // Define image sets for each index
    const imageSets = {
        1: [
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/resident-evil-every-playable-character-ranked.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
            "https://example.com/photo1-2.jpg",
            "https://example.com/photo1-3.jpg",
            "https://example.com/photo1-4.jpg",
            "https://example.com/photo1-5.jpg"
        ],
        2: [
            "https://example.com/photo2-1.jpg",
            "https://example.com/photo2-2.jpg",
            "https://example.com/photo2-3.jpg",
            "https://example.com/photo2-4.jpg",
            "https://example.com/photo2-5.jpg"
        ]
    };

    // Populate the photos container with the corresponding image set
    if (imageSets[index]) {
        photoItems.forEach((item, i) => {
            item.src = imageSets[index][i];
            item.alt = `Photo ${i + 1}`;
        });
    }

    // Display the photo info box
    photoBox.style.display = 'flex';
}

// Close Photo Info Box
function closePhotoInfo() {
    const photoBox = document.getElementById('photo-info-box');
    photoBox.style.display = 'none';
}
