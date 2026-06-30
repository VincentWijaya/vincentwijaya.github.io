// ─── Navbar scroll shadow ────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Mobile menu ─────────────────────────────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open);
});

// Close menu when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ─── Active nav link on scroll ───────────────────────────────────────────────
const sections  = document.querySelectorAll('section[id], footer[id]');
const navItems  = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(item => item.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ─── Scroll-in animations ────────────────────────────────────────────────────
const animateObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.tl-item, .skill-card, .edu-card').forEach(el => {
  animateObserver.observe(el);
});

// ─── Easter egg ──────────────────────────────────────────────────────────────
console.log('%c👋 Hey there, curious dev!', 'font-size:20px;font-weight:bold;color:#6366f1;');
console.log('%cYou opened the console. What a nice move.', 'font-size:14px;color:#a5b4fc;');
console.log('%cLike what you see? Let\'s connect → https://linkedin.com/in/vincwijaya', 'font-size:12px;color:#94a3b8;');
console.log('%c', 'padding:40px 100px;background:url(https://avatars.githubusercontent.com/u/0?s=200) no-repeat center/contain;');
