function getRandomImage() {
    const imageNumber = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir sayı
    const imageUrl = `https://images.unsplash.com/photo-${imageNumber}?auto=format&fit=crop&w=800&q=80`;
    document.getElementById('randomImage').src = imageUrl;
  }
  
  // Sayfa yüklendiğinde bir rastgele resim getir
  window.addEventListener('load', getRandomImage);
