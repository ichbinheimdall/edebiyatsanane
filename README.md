# Fahrenheit 451 - Distopya-Ütopya Sunumu

Modern, responsive web-based presentation for Fahrenheit 451 literature analysis.

## Features

- ✨ Smooth slide transitions with animations
- 🎨 Beautiful gradient design
- 📱 **Fully responsive - optimized for all screen sizes**
- ⌨️ Keyboard navigation (Arrow keys)
- 👆 Touch/swipe support for mobile devices
- 🎯 Progress bar and slide counter
- 🌟 Animated particle background
- 🖼️ **Real book covers and historical images**
- 📖 **Readable text on all devices - no zooming needed**

## Navigation
- **Next Slide**: Click the right arrow button, press Right Arrow key, or swipe left
- **Previous Slide**: Click the left arrow button, press Left Arrow key, or swipe right
- **Fullscreen**: Press 'F' key to toggle fullscreen mode

## Slides Overview

1. **Title Slide** - Fahrenheit 451 with actual book cover
2. **Ütopya vs Distopya** - Definitions with Thomas More's Utopia and 1984 covers
3. **Fahrenheit 451 Analysis** - Utopian and Dystopian elements
4. **Distopik ve Ütopik Eserler** - Movie posters (The Giver, Hunger Games, Wall-E, Avatar, Tomorrowland, Pleasantville)
5. **Kitap Bölümleri** - Key quotes from Fahrenheit 451
6. **Bildirge Kitabı** - Discussion questions with book cover
7. **Günümüzde Distopya ve Ütopya** - Modern examples with statistics
8. **Kaynakça** - Sources and references

## Recent Updates (v2.0)

### Responsiveness Fixed ✅
- **Reduced font sizes** for better readability without zooming
- **Optimized padding and spacing** for all screen sizes
- **Added overflow-y scroll** to slides for longer content
- **Better mobile experience** with improved touch controls
- **Tested on multiple devices** (desktop, tablet, mobile)

### Images Upgraded 🖼️
- **Real Fahrenheit 451 book cover** (1st edition)
- **Historical Thomas More portrait** (Utopia concept)
- **George Orwell's 1984 cover** (Dystopia classic)
- **Historical book burning photo** from 1933
- **Actual movie posters** for all 6 films
- **Bildirge/Declaration book cover** by Gemma Malley
- All images are from educational sources (Wikipedia Commons, fair use)

## Technical Improvements

### Text Sizing
- Title: 3rem (was 4rem)
- Headings: 2rem (was 2.5rem)
- Body text: 0.95rem (was 1.3rem)
- Better line-height for readability

### Layout
- Content max-width: 1100px (increased from 900px)
- Reduced padding: 40px-50px (was 60px)
- Optimized image heights (150px-180px for cards)
- Better grid gaps for cleaner look

### Mobile Optimization
- Single column layout on small screens
- Larger touch targets for buttons
- Readable font sizes (0.8rem minimum)
- Movies grid: 2 columns on tablet, 1 on phone

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Educational Use

All copyrighted images are used for educational purposes only, under fair use doctrine:
- Book covers for identification and criticism
- Historical photographs from public domain
- Movie posters for educational analysis
- No commercial intent

## File Structure

```
edede/
├── index.html      # Main HTML file with slide content
├── styles.css      # All styling and animations
├── script.js       # Presentation logic and interactivity
└── # Fahrenheit 451 - Distopya ve Ütopya Sunumu

Modern, interaktif ve erişilebilir bir edebiyat sunumu. Ray Bradbury'nin Fahrenheit 451 romanı üzerinden distopya ve ütopya kavramlarını inceleyen kapsamlı bir sunum.

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Gradient renkler ve smooth animasyonlar
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⌨️ **Klavye Desteği**: Ok tuşları, F (tam ekran), ? (yardım)
- 👆 **Dokunmatik Destek**: Kaydırma hareketleriyle gezinme
- ♿ **Erişilebilirlik**: ARIA etiketleri ve ekran okuyucu desteği
- 🎭 **Animasyonlar**: Yumuş geçişler ve görsel efektler
- 📊 **İlerleme Çubuğu**: Sunumun neresinde olduğunuzu görün
- 🌙 **Koyu Mod Hazır**: Göz dostu tasarım
- 🖼️ **Yüksek Kaliteli Görseller**: Unsplash ve Wikimedia'dan optimize edilmiş resimler

## 🚀 Kullanım

### Tarayıcıda Açma
Sadece `index.html` dosyasını çift tıklayarak tarayıcıda açın.

### Yerel Sunucu (Önerilen)
```bash
# Python 3 ile
python3 -m http.server 8000

# Node.js ile (http-server paketi gerekli)
npx http-server
```

Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

## ⌨️ Klavye Kısayolları

| Tuş | Açıklama |
|-----|----------|
| `←` | Önceki slayt |
| `→` | Sonraki slayt |
| `F` | Tam ekran aç/kapa |
| `?` | Yardım menüsünü göster |
| `Esc` | Yardım menüsünü kapat |

## 📂 Dosya Yapısı

```
edebiyatsanane/
├── index.html      # Ana HTML dosyası
├── styles.css      # Tüm stil tanımlamaları
├── script.js       # Sunum mantığı ve interaksiyon
└── README.md       # Bu dosya
```

## 🎨 Özelleştirme

### Renk Temasını Değiştirme
`styles.css` dosyasında `:root` bölümündeki CSS değişkenlerini düzenleyin:

```css
:root {
    --color-primary: #4f46e5;
    --color-accent: #8b5cf6;
    /* ... diğer renkler */
}
```

### Slayt Ekleme
`index.html` dosyasına yeni bir slayt eklemek için:

```html
<div class="slide" data-slide="X" role="group" aria-labelledby="slide-X-title" aria-hidden="true" tabindex="-1">
    <div class="slide-content">
        <h2 class="slide-title" id="slide-X-title">Başlık</h2>
        <!-- İçerik buraya -->
    </div>
</div>
```

## 🌐 Tarayıcı Desteği

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 📱 Responsive Breakpoints

- 📱 Mobil: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Desktop: 768px+

## 👥 Geliştirme Ekibi

**11-F Grubu Üyeleri:**
- Elif Barış
- Bora Ağalar
- Umut Güden
- Ela Elikesik
- Ali Sadi Yener

## 📚 Kaynaklar

Sunumda kullanılan görseller ve bilgiler:
- [Unsplash](https://unsplash.com) - Yüksek kaliteli stok fotoğraflar
- [Wikimedia Commons](https://commons.wikimedia.org) - Açık kaynak medya
- [SparkNotes](https://www.sparknotes.com)
- [Gazete Sanat](https://www.gazetesanat.com)

## 📄 Lisans

Bu proje eğitim amaçlı hazırlanmıştır.

## 🐛 Hata Bildirimi

Bir hata bulduysanız veya öneri yapmak istiyorsanız, lütfen GitHub Issues kullanın.

---

**Not**: İnternetsiz kullanım için görseller yerel olarak indirilebilir ve `img` klasörüne konulabilir.       # This file
```

## License

Educational use only. No commercial purposes.
