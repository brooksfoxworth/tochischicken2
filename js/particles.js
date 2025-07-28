/**
 * Particle System for Hero Section
 * Creates animated floating particles with orange/yellow theme
 */

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Particle canvas not found:', canvasId);
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        console.log('Initializing particle system...');
        this.init();
        this.createParticles();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    init() {
        this.resizeCanvas();
    }
    
    resizeCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        console.log('Canvas resized to:', this.canvas.width, 'x', this.canvas.height);
    }
    
    handleResize() {
        this.resizeCanvas();
        // Recreate particles for new canvas size
        this.particles = [];
        this.createParticles();
    }
    
    createParticles() {
        const particleCount = Math.min(30, Math.max(15, Math.floor(this.canvas.width * this.canvas.height / 10000)));
        console.log('Creating', particleCount, 'particles');
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 6 + 2, // Bigger particles
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: (Math.random() - 0.5) * 0.8,
                opacity: Math.random() * 0.6 + 0.3, // More visible
                color: this.getRandomColor(),
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            'rgba(255, 107, 0, ',    // Orange
            'rgba(255, 193, 7, ',    // Yellow
            'rgba(255, 152, 0, ',    // Amber
            'rgba(255, 87, 34, ',    // Deep Orange
            'rgba(255, 235, 59, '    // Light Yellow
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    updateParticle(particle) {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        if (particle.y > this.canvas.height) particle.y = 0;
        
        // Update pulsing opacity
        particle.opacity = 0.2 + 0.3 * Math.sin(Date.now() * particle.pulseSpeed + particle.pulseOffset);
    }
    
    drawParticle(particle) {
        this.ctx.save();
        
        // Create gradient for particle
        const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, particle.color + particle.opacity + ')');
        gradient.addColorStop(1, particle.color + '0)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.updateParticle(particle);
            this.drawParticle(particle);
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.handleResize);
    }
}

// Initialize particle system when DOM is loaded
let particleSystem = null;

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (canvas && !particleSystem) {
        particleSystem = new ParticleSystem('particles-canvas');
    }
}

function destroyParticles() {
    if (particleSystem) {
        particleSystem.destroy();
        particleSystem = null;
    }
}

// Export for use in other modules
export { initParticles, destroyParticles };
