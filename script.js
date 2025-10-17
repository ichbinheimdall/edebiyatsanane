// Presentation Controller
class Presentation {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentSlideDisplay = document.getElementById('current-slide');
        this.totalSlidesDisplay = document.getElementById('total-slides');
        this.progressFill = document.getElementById('progress-fill');
        this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.reduceMotion = this.motionQuery.matches;
        
        this.init();
    }
    
    init() {
        // Set total slides
        this.totalSlidesDisplay.textContent = this.totalSlides;
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Reduced motion preference
        this.toggleMotionClass(this.reduceMotion);
        this.motionQuery.addEventListener('change', (event) => {
            this.reduceMotion = event.matches;
            this.toggleMotionClass(this.reduceMotion);
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) this.nextSlide();
            if (touchEndX > touchStartX + 50) this.prevSlide();
        };
        
        // Initialize first slide
        this.updateSlide();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }
    
    updateSlide() {
        // Remove all active/prev classes
        this.slides.forEach((slide, index) => {
            const isActive = index === this.currentSlide;
            slide.classList.toggle('active', isActive);
            slide.classList.toggle('prev', index < this.currentSlide);
            slide.setAttribute('aria-hidden', String(!isActive));
        });
        
        // Update counter
        this.currentSlideDisplay.textContent = this.currentSlide + 1;
        
        // Update progress bar
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = progress + '%';
        
        // Update button states
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        
        // Trigger animations for the active slide
        this.animateSlideContent();

        const activeSlide = this.slides[this.currentSlide];
        if (activeSlide) {
            activeSlide.scrollTop = 0;
            activeSlide.focus({ preventScroll: true });
        }
    }
    
    animateSlideContent() {
        if (this.reduceMotion) {
            return;
        }

        const activeSlide = this.slides[this.currentSlide];
        const animatedElements = activeSlide.querySelectorAll(
            '.animated-list li, .timeline-item, .summary-card, .movie-card, .quote-card, .modern-card, .sources-list li, .question-box'
        );
        
        // Reset animations
        animatedElements.forEach(el => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = '';
            }, 10);
        });
    }

    toggleMotionClass(shouldReduce) {
        document.documentElement.classList.toggle('reduce-motion', shouldReduce);
    }
}

// Particle Background Effect (Optional enhancement)
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.init();
    }
    
    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.createParticles();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Help Overlay Controller
class HelpOverlay {
    constructor() {
        this.overlay = document.getElementById('help-overlay');
        this.helpBtn = document.getElementById('help-btn');
        this.closeBtn = document.getElementById('close-help');
        this.init();
    }

    init() {
        if (!this.overlay || !this.helpBtn || !this.closeBtn) return;

        this.helpBtn.addEventListener('click', () => this.show());
        this.closeBtn.addEventListener('click', () => this.hide());
        
        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.hide();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === '?' && !this.overlay.classList.contains('active')) {
                e.preventDefault();
                this.show();
            }
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.hide();
            }
        });
    }

    show() {
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hide() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Image Error Handling
function handleImageError() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // Set a placeholder gradient background
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = this.alt || 'Resim yüklenemedi';
        });
    });
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new Presentation();
    const helpOverlay = new HelpOverlay();
    let particles = null;

    if (!presentation.reduceMotion) {
        particles = new ParticleBackground();
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle image loading errors
    handleImageError();

    // Add loading complete class
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Fullscreen toggle
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn('Fullscreen request failed:', err);
            });
        } else {
            document.exitFullscreen().catch(err => {
                console.warn('Exit fullscreen failed:', err);
            });
        }
    }
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.log('Service Worker registration failed:', err);
        // });
    });
}
