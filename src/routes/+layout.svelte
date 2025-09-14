<script lang="ts">
import '../app.css';
import { fly } from 'svelte/transition';
import { page } from '$app/stores';
import Navigation from '$lib/components/Navigation.svelte';
import AnimatedHeader from '$lib/components/AnimatedHeader.svelte';

const navItems = [
    { href: '/', label: 'HOME', icon: 'terminal' },
    { href: '/about', label: 'ABOUT', icon: 'user' },
    { href: '/experience', label: 'EXPERIENCE', icon: 'briefcase' },
    { href: '/education', label: 'EDUCATION', icon: 'academic-cap' },
    { href: '/skills', label: 'SKILLS', icon: 'code' },
    { href: '/projects', label: 'PROJECTS', icon: 'folder' },
    { href: '/certificates', label: 'CERTS', icon: 'badge-check' },
    { href: 'https://0xjerry.is-a.dev', label: "0xJerry's Lab", icon: 'code' },
    { href: '/contact', label: 'CONTACT', icon: 'mail' }
];
</script>

<div class="min-h-screen flex flex-col bg-black text-green-400 relative">
    <Navigation {navItems} />
    <div class="matrix-bg fixed inset-0 opacity-20 pointer-events-none z-0"></div>
    <header class="pt-28 md:pt-28 pb-6 md:pb-8 px-4 sm:px-6 relative z-10">
        <div class="container mx-auto max-w-7xl w-full">
            <slot name="header">
                {#key $page.url.pathname}
                    <AnimatedHeader text=">> Initializing secure environment..." speed={50} />
                {/key}
            </slot>
        </div>
    </header>
    <main class="flex-grow relative z-10 px-4 sm:px-6 pb-12">
        <div class="container mx-auto max-w-7xl w-full">
            <slot />
        </div>
    </main>
    <footer class="relative z-10 py-4 px-4 sm:px-6 border-t border-green-500/30">
        <div class="container mx-auto max-w-7xl text-center">
            <p
                class="text-green-400/70 text-sm font-mono tracking-wide cursor-pointer transition-colors duration-300 hover:text-green-400"
                on:click={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >&copy; 2025 Jerome Andrew K. All Rights Reserved</p>
        </div>
    </footer>
</div>

<style>
    .text-shadow-glow {
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }

    footer p {
        transition: none !important;
    }
</style>
