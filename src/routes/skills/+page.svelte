<script>
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';

let visible = false;

onMount(() => {
    visible = true;
    initMatrix();
});

function initMatrix() {
    const canvas = document.getElementById('matrix-bg');
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width/fontSize;
    
    const rainDrops = [];
    
    for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
    }
    
    const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';
    
    for(let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
        rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    };
    
    setInterval(draw, 30);
}
</script>

<canvas id="matrix-bg"></canvas>

{#if visible}
<div class="skills-container" transition:fade>
<div class="terminal-window">
    <div class="terminal-header">
    <div class="terminal-buttons">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="terminal-title">skills.exe</div>
    </div>
    
    <div class="terminal-content">
    <div class="category">
        <h2>> Programming Languages_</h2>
        <div class="skills-grid">
        <div class="skill-item">
            <span>Python</span>
            <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
        </div>
        <div class="skill-item">
            <span>ASP.NET</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
        </div>
        <div class="skill-item">
            <span>SQL</span>
            <div class="progress-bar"><div class="progress" style="width: 88%"></div></div>
        </div>
        </div>
    </div>

    <div class="category">
        <h2>> Data Analytics & Visualization_</h2>
        <div class="skills-grid">
        <div class="skill-item">
            <span>Power BI</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
        </div>
        <div class="skill-item">
            <span>Machine Learning</span>
            <div class="progress-bar"><div class="progress" style="width: 82%"></div></div>
        </div>
        <div class="skill-item">
            <span>Neural Networks</span>
            <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
        </div>
        <div class="skill-item">
            <span>Reinforcement Learning</span>
            <div class="progress-bar"><div class="progress" style="width: 75%"></div></div>
        </div>
        </div>
    </div>

    <div class="category">
        <h2>> Cybersecurity Tools & Techniques_</h2>
        <div class="skills-grid">
        <div class="skill-item">
            <span>Wireshark</span>
            <div class="progress-bar"><div class="progress" style="width: 92%"></div></div>
        </div>
        <div class="skill-item">
            <span>Nmap</span>
            <div class="progress-bar"><div class="progress" style="width: 88%"></div></div>
        </div>
        <div class="skill-item">
            <span>Metasploit</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
        </div>
        <div class="skill-item">
            <span>Nessus</span>
            <div class="progress-bar"><div class="progress" style="width: 83%"></div></div>
        </div>
        <div class="skill-item">
            <span>Penetration Testing</span>
            <div class="progress-bar"><div class="progress" style="width: 87%"></div></div>
        </div>
        <div class="skill-item">
            <span>Cryptography</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
        </div>
        <div class="skill-item">
            <span>Ethical Hacking</span>
            <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
        </div>
        </div>
    </div>

    <div class="category">
        <h2>> Cloud Technologies_</h2>
        <div class="skills-grid">
        <div class="skill-item">
            <span>AWS</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
        </div>
        <div class="skill-item">
            <span>Google Cloud Platform</span>
            <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
        </div>
        <div class="skill-item">
            <span>Cloud Computing</span>
            <div class="progress-bar"><div class="progress" style="width: 88%"></div></div>
        </div>
        </div>
    </div>

    <div class="category">
        <h2>> Other Skills_</h2>
        <div class="other-skills">
        <div class="skill-text">• Strong understanding of network security protocols</div>
        <div class="skill-text">• Experience with system vulnerability assessments and threat modeling</div>
        <div class="skill-text">• Hands-on expertise in ethical hacking and incident response</div>
        </div>
    </div>
    </div>
</div>
</div>
{/if}

<style>
canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.15;
}

.skills-container {
    position: relative;
    z-index: 2;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.terminal-window {
    background: rgba(0, 0, 0, 0.85);
    width: 90%;
    max-width: 1200px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    overflow: hidden;
}

.terminal-header {
    background: #2d2d2d;
    padding: 10px;
    display: flex;
    align-items: center;
}

.terminal-buttons {
    display: flex;
    gap: 8px;
}

.terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff5f56;
}

.terminal-buttons span:nth-child(2) {
    background: #ffbd2e;
}

.terminal-buttons span:nth-child(3) {
    background: #27c93f;
}

.terminal-title {
    color: #fff;
    margin-left: 20px;
    font-family: monospace;
}

.terminal-content {
    padding: 2rem;
    color: #0f0;
    font-family: 'Courier New', monospace;
}

.category {
    margin-bottom: 2.5rem;
}

h2 {
    color: #0f0;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: normal;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.skill-item {
    background: rgba(0, 255, 0, 0.1);
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 255, 0, 0.2);
}

.skill-item span {
    display: block;
    margin-bottom: 0.5rem;
}

.progress-bar {
    background: rgba(0, 255, 0, 0.1);
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.progress {
    background: #0f0;
    height: 100%;
    border-radius: 5px;
    transition: width 1s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.other-skills {
    display: grid;
    gap: 1rem;
}

.skill-text {
    padding: 0.8rem;
    background: rgba(0, 255, 0, 0.1);
    border-radius: 5px;
    border: 1px solid rgba(0, 255, 0, 0.2);
    transition: all 0.3s ease;
}

.skill-text:hover {
    background: rgba(0, 255, 0, 0.2);
    transform: translateX(10px);
}

@media (max-width: 768px) {
    .skills-container {
    padding: 1rem;
    }

    .terminal-window {
    width: 95%;
    }

    .skills-grid {
    grid-template-columns: 1fr;
    }

    h2 {
    font-size: 1.2rem;
    }
}
</style>

