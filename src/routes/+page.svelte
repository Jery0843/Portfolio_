<script lang="ts">
import { onMount } from 'svelte';
import { fade, fly } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

let canvas;
let ctx;
let visible = false;
let activeSection = 'about';

// Real information about Jerome
const personalInfo = {
    name: 'Jerome Andrew K',
    title: 'Cybersecurity Expert & Full-Stack Developer',
    location: 'Available Worldwide',
    status: 'Open to Work'
};

const skills = [
    { name: 'Ethical Hacking', level: 95 },
    { name: 'Penetration Testing', level: 90 },
    { name: 'Full-Stack Development', level: 85 },
    { name: 'Network Security', level: 88 },
    { name: 'Python/JavaScript', level: 92 }
];

// Real navigation links
const navigationLinks = [
    { name: 'Projects', url: '/projects', icon: '🚀', description: 'View my portfolio projects' },
    { name: 'Certificates', url: '/certificates', icon: '🏆', description: '20+ professional certifications' },
    { name: 'Blog', url: 'https://0xJerry.is-a.dev', icon: '📝', description: 'Technical articles & insights' },
    { name: 'Contact', url: '/contact', icon: '📧', description: 'Get in touch with me' }
];

onMount(() => {
    visible = true;
    initMatrix();
});

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    
    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}
</script>

<!-- Matrix Background -->
<canvas bind:this={canvas} class="matrix-bg"></canvas>
<div class="scanline"></div>

{#if visible}
<div class="home-container" transition:fade={{ duration: 800 }}>
    <!-- Hero Section -->
    <section class="hero-section" in:fly={{ y: -30, duration: 800 }}>
        <h1 class="hero-title">
            <span class="bracket">&lt;</span>
            <span class="name">{personalInfo.name}</span>
            <span class="bracket">/&gt;</span>
        </h1>
        <p class="hero-subtitle" in:fade={{ delay: 400 }}>{personalInfo.title}</p>
        <div class="hero-meta" in:fade={{ delay: 600 }}>
            <div class="status-item">
                <span class="status-dot"></span>
                <span>{personalInfo.status}</span>
            </div>
            <div class="location">📍 {personalInfo.location}</div>
        </div>
    </section>

    <!-- Main Content Grid -->
    <main class="content-grid">
        <!-- Profile Section -->
        <section class="profile-section" in:fly={{ x: -50, duration: 800, delay: 200 }}>
            <div class="profile-card">
                <div class="profile-image-container">
                    <img 
                        src="https://securehive.securenotepad.tech/2.jpeg" 
                        alt="Jerome's Profile"
                        class="profile-image"
                    />
                </div>
                <div class="profile-info">
                    <h3>Quick Intro</h3>
                    <p>Cybersecurity researcher and penetration tester with a passion for ethical hacking and secure development. I specialize in finding vulnerabilities and building defensive solutions to protect digital infrastructure.</p>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="skills-section" in:fly={{ x: 50, duration: 800, delay: 400 }}>
            <div class="section-card">
                <h3 class="section-title">
                    <span class="icon">⚡</span>
                    Skills & Expertise
                </h3>
                <div class="skills-list">
                    {#each skills as skill, i}
                        <div class="skill-item" in:fly={{ y: 20, duration: 400, delay: 600 + (i * 100) }}>
                            <div class="skill-info">
                                <span class="skill-name">{skill.name}</span>
                                <span class="skill-percentage">{skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div 
                                    class="skill-fill" 
                                    style="width: {skill.level}%; animation-delay: {i * 0.2}s;"
                                ></div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Navigation Section -->
        <section class="navigation-section" in:fly={{ y: 50, duration: 800, delay: 600 }}>
            <div class="section-card">
                <h3 class="section-title">
                    <span class="icon">🚀</span>
                    Explore Portfolio
                </h3>
                <div class="nav-grid">
                    {#each navigationLinks as link, i}
                        <a 
                            href={link.url} 
                            class="nav-card"
                            in:fly={{ y: 30, duration: 400, delay: 800 + (i * 100) }}
                        >
                            <div class="nav-icon">{link.icon}</div>
                            <div class="nav-info">
                                <h4>{link.name}</h4>
                                <p>{link.description}</p>
                            </div>
                            <div class="nav-arrow">→</div>
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    </main>

    <!-- CTA Section -->
    <section class="cta-section" in:fly={{ y: 50, duration: 800, delay: 1000 }}>
        <div class="cta-content">
            <h3>Ready to Work Together?</h3>
            <p>Let's discuss your cybersecurity needs or development projects</p>
            <div class="cta-buttons">
                <a href="/contact" class="cta-btn primary">
                    <span class="btn-icon">📧</span>
                    Get In Touch
                </a>
                <a href="/projects" class="cta-btn secondary">
                    <span class="btn-icon">🔍</span>
                    View My Work
                </a>
            </div>
        </div>
    </section>
</div>
{/if}

<style>
:global(body) {
    background: #000;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
    color: #fff;
}

/* Matrix Background */
.matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
}

/* Scanline Effect */
.scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,
        rgba(0, 255, 0, 0) 0%,
        rgba(0, 255, 0, 0.03) 50%,
        rgba(0, 255, 0, 0) 100%);
    animation: scanline 15s linear infinite;
    pointer-events: none;
    z-index: 1;
}

@keyframes scanline {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
}

/* Home Container */
.home-container {
    min-height: 100vh;
    padding: 2rem 1rem;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 4rem 0 3rem;
    margin-bottom: 3rem;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
}

.bracket {
    color: #00bfff;
    text-shadow: 0 0 20px #00bfff;
}

.name {
    color: #00ff00;
    text-shadow: 0 0 30px #00ff00;
}

.hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    font-weight: 300;
}

.hero-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.status-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid rgba(0, 255, 0, 0.3);
    border-radius: 20px;
    font-size: 0.9rem;
    color: #00ff00;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ff00;
    animation: pulse 2s infinite;
}

.location {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* Content Grid */
.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;
    margin-bottom: 4rem;
}

.navigation-section {
    grid-column: 1 / -1;
}

/* Card Styles */
.profile-card,
.section-card {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 255, 0, 0.2);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
}

.profile-card:hover,
.section-card:hover {
    border-color: rgba(0, 255, 0, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 0, 0.1);
}

/* Profile Section */
.profile-image-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    border: 3px solid #00ff00;
    background: linear-gradient(45deg, #00ff00, #00bfff);
    padding: 3px;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.profile-info h3 {
    color: #00ff00;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

.profile-info p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    text-align: center;
}

/* Section Titles */
.section-title {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #00ff00;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
}

.icon {
    font-size: 1.3rem;
}

/* Skills Section */
.skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-item {
    opacity: 0;
    animation: slideUp 0.6s ease forwards;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.skill-name {
    color: #fff;
    font-weight: 500;
}

.skill-percentage {
    color: #00ff00;
    font-weight: 600;
    font-family: 'Courier New', monospace;
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #00ff00, #00bfff);
    border-radius: 4px;
    transform: translateX(-100%);
    animation: fillBar 1s ease forwards;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fillBar {
    to {
        transform: translateX(0);
    }
}

/* Navigation Section */
.nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.nav-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(0, 255, 0, 0.1);
    border-radius: 15px;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.nav-card:hover {
    border-color: rgba(0, 255, 0, 0.3);
    background: rgba(0, 255, 0, 0.05);
    transform: translateY(-3px);
}

.nav-icon {
    font-size: 2rem;
    min-width: 50px;
    text-align: center;
}

.nav-info {
    flex: 1;
}

.nav-info h4 {
    color: #00ff00;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
}

.nav-info p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.4;
}

.nav-arrow {
    color: #00ff00;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}

.nav-card:hover .nav-arrow {
    transform: translateX(5px);
}

/* CTA Section */
.cta-section {
    text-align: center;
    padding: 3rem 2rem;
    background: rgba(0, 255, 0, 0.02);
    border: 1px solid rgba(0, 255, 0, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(20px);
}

.cta-content h3 {
    color: #00ff00;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.cta-content p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.cta-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid;
    font-size: 1rem;
}

.cta-btn.primary {
    background: linear-gradient(135deg, #00ff00, #00bfff);
    color: #000;
    border-color: #00ff00;
}

.cta-btn.secondary {
    background: transparent;
    color: #00ff00;
    border-color: #00ff00;
}

.cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-btn.primary:hover {
    box-shadow: 0 10px 25px rgba(0, 255, 0, 0.3);
}

.cta-btn.secondary:hover {
    background: rgba(0, 255, 0, 0.1);
}

.btn-icon {
    font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .home-container {
        padding: 1rem 0.5rem;
    }
    
    .hero-section {
        padding: 2rem 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .hero-meta {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-grid {
        grid-template-columns: 1fr;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
    
    .profile-card,
    .section-card {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .profile-card,
    .section-card {
        padding: 1rem;
    }
    
    .nav-card {
        padding: 1rem;
    }
    
    .section-title {
        font-size: 1.3rem;
    }
}
</style>
