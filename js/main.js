'use strict';

/* ── Navigation scroll state ───────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile menu ───────────────────────────────── */
const menuToggle = document.getElementById('menu-toggle');
const navMenu    = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('nav__menu--open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── Active nav link on scroll ─────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.35, rootMargin: `-${78}px 0px -40% 0px` });

sections.forEach(s => sectionObserver.observe(s));

/* ── Scroll reveal ─────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── FAQ accordion ─────────────────────────────── */
document.querySelectorAll('.faq-item__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-item__answer');
    const isOpen = item.classList.contains('faq-item--open');

    /* close all */
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('faq-item--open');
      i.querySelector('.faq-item__answer').style.maxHeight = null;
      i.querySelector('.faq-item__btn').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('faq-item--open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── Contact form → WhatsApp ───────────────────── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name     = form.querySelector('[name="name"]').value.trim();
    const phone    = form.querySelector('[name="phone"]').value.trim();
    const interest = form.querySelector('[name="interest"]').value;
    const message  = form.querySelector('[name="message"]').value.trim();

    const labels = {
      naturopathy: 'נטורופתיה ותזונה',
      youth:       'ילדים ונוער',
      adults:      'אימון רגשי למבוגרים',
      other:       'אחר',
    };

    const lines = [
      `שלום מורן,`,
      `שמי ${name}.`,
      `מספר טלפון: ${phone}`,
      `תחום עניין: ${labels[interest] || interest}`,
      ...(message ? [`\n${message}`] : []),
    ];

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/972507353868?text=${text}`, '_blank', 'noopener');

    const submitBtn = form.querySelector('.btn-submit');
    const orig = submitBtn.textContent;
    submitBtn.textContent = 'ההודעה נשלחה - מיד נחזור אליך';
    submitBtn.style.background = '#4caf50';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = orig;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 4000);
  });
}
