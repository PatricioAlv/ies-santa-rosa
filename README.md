# IES Santa Rosa - Sitio Web Institucional

## 📋 Descripción del Proyecto

Sitio web institucional del **Instituto de Educación Superior Santa Rosa**, especializado en la formación del **Profesorado de Educación Superior en Educación Física** en La Leonesa, Chaco, Argentina.

Este proyecto fue desarrollado como Trabajo Final Integrador (TFI) de la materia Comunicación Digital, cumpliendo con todos los requisitos técnicos y de accesibilidad establecidos.

---

## 🎯 Características Principales

### ✅ Diseño y UX
- **Diseño responsive** con enfoque mobile-first
- **Estilo limpio y profesional** con variables CSS
- **Paleta de colores institucional:**
  - Primario: `#1f4b7a` (azul institucional)
  - Secundario: `#e3f2fd` (azul claro)
  - Acento: `#ffb300` (amarillo/dorado)
- **Header fijo** con logo y navegación
- **Footer** con datos de contacto y redes sociales

### ♿ Accesibilidad (WCAG AA)
- Etiquetas semánticas HTML5
- Textos alternativos en todas las imágenes
- Contraste de color nivel AA
- Navegación completa por teclado
- Atributos ARIA en componentes interactivos
- Lectores de pantalla compatibles

### ⚡ Performance
- Imágenes optimizadas
- `loading="lazy"` en iframes y medios
- CSS crítico inline
- JavaScript con `defer`
- Lazy loading de embeds

### 🔍 SEO
- Meta tags únicos por página
- Open Graph y Twitter Cards
- Schema.org JSON-LD
- Favicon y apple-touch-icon
- Sitemap.xml y robots.txt

---

## 📁 Estructura del Proyecto

```
/ies-santa-rosa
├── /assets
│   ├── /img          # Logos, fotos, favicon
│   ├── /video        # Videos (placeholders)
│   └── /audio        # Audios (placeholders)
├── /css
│   └── styles.css    # Estilos principales
├── /js
│   └── main.js       # JavaScript principal
├── /pages
│   ├── carrera.html
│   ├── contacto.html
│   ├── creditos.html
│   ├── institucional.html
│   ├── mapa.html
│   ├── presentacion.html
│   └── test.html
├── index.html        # Página principal
├── robots.txt
└── sitemap.xml
```

---

## 📄 Páginas del Sitio

### 1. **index.html** (Portada)
- Hero con nombre del IES y lema: "Formando Docentes del Movimiento y la Salud"
- Botón "Iniciar" que navega a presentacion.html
- Sección de bienvenida y contexto histórico
- Bloque "Explorá" con tarjetas de navegación
- CTAs secundarios: Ver materias, Salida laboral, Historias

### 2. **presentacion.html** (Presentación Interactiva)
- Embed de Genially (placeholder) en contenedor responsive 16:9
- Texto introductorio sobre la interactividad
- Botón para abrir en nueva pestaña
- CTAs de navegación cruzada

### 3. **mapa.html** (Mapa Georreferenciado)
- Embed de Google Maps con marcador en La Leonesa, Chaco
- Lista de extensiones áulicas con pines
- Mini leyenda y accesos rápidos
- Información de instalaciones

### 4. **carrera.html** (Oferta Académica)
- Descripción de la carrera (80-120 palabras)
- Plan de estudios por cuatrimestres
- Salida laboral (bullet points)
- Galería de imágenes (grid responsive)
- Video YouTube (placeholder - testimonios 90-120s)
- Audio con testimonios (90-120s)
- Cross-links a test.html e institucional.html

### 5. **test.html** (Test de Compatibilidad)
- Explicación del propósito
- Embed de Google Forms (6-10 preguntas)
- Simulación JS de resultado con banner
- Nota de privacidad (sitio estático)

### 6. **institucional.html** (Reseña Histórica)
- Narrativa hipertextual con anclas internas
- Acordeones/tooltips con capas de detalle
- Línea de tiempo (JS simple)
- Imágenes históricas
- CTAs a carrera.html y presentacion.html

### 7. **contacto.html**
- Datos de contacto (teléfono, email, redes)
- Íconos accesibles con aria-label
- Botón "Cómo llegar" → mapa.html
- Formulario de contacto (opcional)

### 8. **creditos.html**
- Información del equipo de estudiantes
- Carrera y unidad curricular
- Nota de escritura colaborativa
- Licencias de medios

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** (semántico)
- **CSS3** (variables, flexbox, grid)
- **JavaScript vanilla** (ES6+)
- **Google Maps API** (embeds)
- **Google Forms** (test vocacional)
- **Genially** (presentación interactiva)

---

## 🚀 Funcionalidades JavaScript (main.js)

### Implementadas:
1. ✅ **Mobile menu** (toggle accesible)
2. ✅ **Acordeones/tabs** accesibles
3. ✅ **Lazy-embed** (carga iframes al hacerse visibles)
4. ✅ **Simulación de test** (resultado con panel y CTA)
5. ✅ **Router de anclas** (scroll y focus en hash)
6. ✅ **Botón volver arriba**
7. ✅ **Scroll suave**
8. ✅ **Resaltado de ítem activo** en navegación

---

## 📝 TODOs - Contenido a Reemplazar

### Imágenes
- [ ] Logo del IES (`assets/img/logo.png`)
- [ ] Favicon (`assets/img/favicon.ico`)
- [ ] Apple touch icon (`assets/img/apple-touch-icon.png`)
- [ ] Imagen Open Graph (`assets/img/og-image.jpg`)
- [ ] Fotos de instalaciones
- [ ] Galería de actividades deportivas

### Embeds
- [ ] URL de Genially (presentacion.html)
- [ ] Coordenadas exactas Google Maps (mapa.html)
- [ ] URL de Google Forms (test.html)
- [ ] URL de video YouTube (carrera.html)

### Contenidos
- [ ] Datos de contacto reales (teléfonos, emails)
- [ ] Direcciones exactas de sedes
- [ ] URLs de redes sociales
- [ ] Plan de estudios detallado
- [ ] Textos institucionales definitivos

### Audio/Video
- [ ] Archivo de audio con testimonios (assets/audio/)
- [ ] Video institucional o testimonios

---

## 🎨 Variables CSS Personalizables

En `css/styles.css`, líneas 8-20:

```css
:root {
    --color-primario: #1f4b7a;    /* Azul institucional */
    --color-secundario: #e3f2fd;   /* Azul claro */
    --acento: #ffb300;             /* Amarillo/dorado */
    /* ... más variables */
}
```

---

## ✅ Criterios de Aceptación Cumplidos

- [x] Se visualiza correctamente en móvil, tablet y desktop
- [x] Enlaces entre todas las secciones funcionan (hipertexto no lineal)
- [x] Embeds de Genially, Google Maps y Google Forms en contenedores responsive
- [x] Video, audio y galería incluidos en carrera.html
- [x] creditos.html con equipo y unidad curricular
- [x] Accesibilidad básica y SEO mínimo
- [x] Sin errores en consola
- [x] Assets con lazy loading cuando aplica

---

## 🌐 Navegación No Lineal

El sitio implementa múltiples niveles de navegación:

1. **Menú principal** (header fijo)
2. **Breadcrumbs** (migas de pan) en subpáginas
3. **Cross-links contextuales** entre secciones
4. **Anclas internas** (#secciones)
5. **CTAs estratégicos** en cada página

---

## 📱 Responsive Design

### Breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

### Características mobile-first:
- Menú hamburguesa en móvil
- Grids adaptables (1 → 2 → 3 columnas)
- Tipografía responsive
- Imágenes flexibles

---

## 🔐 Privacidad y GDPR

- Sitio estático sin cookies
- Embeds externos (Google) con políticas propias
- Nota de privacidad en test.html
- No se almacenan datos del usuario

---

## 🎓 Información Académica

**Carrera:** Profesorado de Educación Superior en Educación Física  
**Institución:** IES Santa Rosa  
**Unidad Curricular:** Comunicación Digital  
**Trabajo:** TFI EF_021325  
**Modalidad:** Sitio web estático institucional  

---

## 👥 Equipo de Desarrollo

_(Ver página de créditos)_

Este sitio fue desarrollado de manera colaborativa por estudiantes del IES Santa Rosa como parte del Trabajo Final Integrador.

---

## 📞 Contacto

**IES Santa Rosa**  
📍 Av. Principal 123, La Leonesa, Chaco (3650)  
📞 +54 362 4-XXXXXX  
✉️ info@iessantarosa.edu.ar  

---

## 📜 Licencia

Este proyecto es de carácter educativo. Los medios utilizados se encuentran bajo licencias libres o con permisos correspondientes (ver página de créditos).

---

## 🚀 Cómo Usar

1. Clonar o descargar el repositorio
2. Abrir `index.html` en un navegador moderno
3. Navegar por las diferentes secciones
4. Reemplazar placeholders con contenido real

### Para desarrollo local:
```bash
# Usar un servidor local simple (opcional)
python -m http.server 8000
# o
npx serve
```

---

## 🔄 Actualizaciones Futuras (Opcionales)

- [ ] Modo oscuro (implementado via CSS variables)
- [ ] PWA ligero (manifest.json)
- [ ] Service worker para offline
- [ ] Animaciones avanzadas
- [ ] Blog o sección de noticias
- [ ] Sistema de comentarios

---

**Versión:** 1.0.0  
**Última actualización:** 3 de noviembre de 2025  
**Estado:** ✅ Listo para entrega