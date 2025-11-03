// ========================================
// IES SANTA ROSA - JavaScript Principal
// Profesorado de Educación Superior en Educación Física
// ========================================

'use strict';

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('IES Santa Rosa - Sitio web cargado');
    
    // Inicializar componentes
    initMobileMenu();
    initAccordions();
    initBackToTop();
    initLazyEmbeds();
    initAnchorRouter();
    initTestSimulation();
    initSmoothScroll();
    highlightActiveNavItem();
});

// ========================================
// MENÚ MÓVIL
// ========================================
function initMobileMenu() {
    const toggle = document.querySelector('.header__toggle');
    const mobileNav = document.querySelector('.header__nav--mobile');
    
    if (!toggle || !mobileNav) return;
    
    toggle.addEventListener('click', function() {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        toggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.classList.toggle('active');
        
        // Bloquear scroll cuando el menú está abierto
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileNav.querySelectorAll('.header__nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggle.setAttribute('aria-expanded', 'false');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Cerrar menú al presionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggle.setAttribute('aria-expanded', 'false');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// ACORDEONES ACCESIBLES
// ========================================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion__header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const content = document.getElementById(header.getAttribute('aria-controls'));
            
            // Cerrar todos los demás acordeones (opcional: comentar para permitir múltiples abiertos)
            // closeAllAccordions(header);
            
            // Toggle del acordeón actual
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (content) {
                if (isExpanded) {
                    content.classList.remove('accordion__content--expanded');
                    content.style.maxHeight = '0';
                } else {
                    content.classList.add('accordion__content--expanded');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
        
        // Soporte de teclado
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

function closeAllAccordions(exceptHeader) {
    const allHeaders = document.querySelectorAll('.accordion__header');
    allHeaders.forEach(header => {
        if (header !== exceptHeader) {
            header.setAttribute('aria-expanded', 'false');
            const content = document.getElementById(header.getAttribute('aria-controls'));
            if (content) {
                content.classList.remove('accordion__content--expanded');
                content.style.maxHeight = '0';
            }
        }
    });
}

// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Dar foco al elemento principal para accesibilidad
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
        }
    });
}

// ========================================
// LAZY LOADING DE EMBEDS
// ========================================
function initLazyEmbeds() {
    const lazyEmbeds = document.querySelectorAll('[data-lazy-src]');
    
    if ('IntersectionObserver' in window) {
        const embedObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const embed = entry.target;
                    const src = embed.getAttribute('data-lazy-src');
                    
                    if (src) {
                        embed.setAttribute('src', src);
                        embed.removeAttribute('data-lazy-src');
                    }
                    
                    observer.unobserve(embed);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        lazyEmbeds.forEach(embed => embedObserver.observe(embed));
    } else {
        // Fallback para navegadores sin soporte de IntersectionObserver
        lazyEmbeds.forEach(embed => {
            const src = embed.getAttribute('data-lazy-src');
            if (src) {
                embed.setAttribute('src', src);
            }
        });
    }
}

// ========================================
// ROUTER DE ANCLAS (HASH)
// ========================================
function initAnchorRouter() {
    // Al cargar la página con hash
    if (window.location.hash) {
        setTimeout(function() {
            scrollToAnchor(window.location.hash);
        }, 100);
    }
    
    // Al cambiar el hash
    window.addEventListener('hashchange', function() {
        scrollToAnchor(window.location.hash);
    });
}

function scrollToAnchor(hash) {
    if (!hash) return;
    
    const target = document.querySelector(hash);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus();
    }
}

// ========================================
// SCROLL SUAVE
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Actualizar URL sin recargar
                history.pushState(null, null, href);
                
                // Dar foco al elemento
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
}

// ========================================
// RESALTAR ÍTEM ACTIVO EN NAVEGACIÓN
// ========================================
function highlightActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === currentPath) {
            link.classList.add('header__nav-link--active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// ========================================
// SIMULACIÓN DE TEST (para test.html)
// ========================================
function initTestSimulation() {
    const testCompleteBtn = document.getElementById('test-complete-btn');
    const testResultPanel = document.getElementById('test-result-panel');
    
    if (!testCompleteBtn || !testResultPanel) return;
    
    testCompleteBtn.addEventListener('click', function() {
        // Simular cálculo de afinidad
        const affinity = Math.floor(Math.random() * 30) + 70; // 70-100%
        
        // Actualizar panel de resultados
        const affinityText = testResultPanel.querySelector('.test-result__affinity');
        const recommendationText = testResultPanel.querySelector('.test-result__recommendation');
        
        if (affinityText) {
            affinityText.textContent = affinity + '%';
        }
        
        if (recommendationText) {
            if (affinity >= 85) {
                recommendationText.textContent = '¡Excelente! Tenés un gran perfil para la Educación Física. Te esperamos en el IES Santa Rosa.';
            } else if (affinity >= 70) {
                recommendationText.textContent = 'Tenés buen potencial para esta carrera. Te invitamos a conocer más sobre el profesorado.';
            } else {
                recommendationText.textContent = 'Explorá más sobre la carrera para tomar una decisión informada.';
            }
        }
        
        // Mostrar panel con animación
        testResultPanel.style.display = 'block';
        testResultPanel.setAttribute('aria-hidden', 'false');
        
        setTimeout(function() {
            testResultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
        
        // Ocultar botón
        testCompleteBtn.style.display = 'none';
    });
}

// ========================================
// TABS ACCESIBLES
// ========================================
function initTabs() {
    const tabLists = document.querySelectorAll('[role="tablist"]');
    
    tabLists.forEach(tabList => {
        const tabs = tabList.querySelectorAll('[role="tab"]');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                activateTab(tab, tabs);
            });
            
            // Navegación por teclado
            tab.addEventListener('keydown', function(e) {
                let newIndex;
                
                if (e.key === 'ArrowRight') {
                    newIndex = index + 1;
                    if (newIndex >= tabs.length) newIndex = 0;
                    tabs[newIndex].focus();
                    activateTab(tabs[newIndex], tabs);
                } else if (e.key === 'ArrowLeft') {
                    newIndex = index - 1;
                    if (newIndex < 0) newIndex = tabs.length - 1;
                    tabs[newIndex].focus();
                    activateTab(tabs[newIndex], tabs);
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    tabs[0].focus();
                    activateTab(tabs[0], tabs);
                } else if (e.key === 'End') {
                    e.preventDefault();
                    tabs[tabs.length - 1].focus();
                    activateTab(tabs[tabs.length - 1], tabs);
                }
            });
        });
    });
}

function activateTab(activeTab, allTabs) {
    // Desactivar todos los tabs
    allTabs.forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
        
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.setAttribute('hidden', '');
        }
    });
    
    // Activar el tab seleccionado
    activeTab.setAttribute('aria-selected', 'true');
    activeTab.removeAttribute('tabindex');
    
    const panelId = activeTab.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.removeAttribute('hidden');
    }
}

// ========================================
// UTILIDADES
// ========================================

// Debounce para optimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Detectar si el usuario prefiere movimiento reducido
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Anunciar cambios a lectores de pantalla
function announceToScreenReader(message) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    
    document.body.appendChild(liveRegion);
    
    setTimeout(() => {
        document.body.removeChild(liveRegion);
    }, 1000);
}

// ========================================
// EXPORTAR FUNCIONES (si se usa como módulo)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMobileMenu,
        initAccordions,
        initBackToTop,
        initLazyEmbeds,
        initAnchorRouter,
        initTestSimulation,
        initTabs,
        debounce,
        announceToScreenReader
    };
}
