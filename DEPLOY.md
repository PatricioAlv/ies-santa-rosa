# 🚀 Guía de Deployment - GitHub Pages

Esta guía te explica cómo publicar el sitio web del IES Santa Rosa **completamente gratis** usando GitHub Pages.

## 📋 Requisitos Previos

- Cuenta de GitHub (gratis en [github.com](https://github.com))
- Git instalado en tu computadora ([descargar aquí](https://git-scm.com/))

## 🎯 Pasos para Publicar

### 1️⃣ Crear Repositorio en GitHub

1. Ingresá a [GitHub](https://github.com) e iniciá sesión
2. Click en el botón **"New"** (nuevo repositorio)
3. Nombre del repositorio: `ies-santa-rosa` (o el que prefieras)
4. Seleccioná **Public** (público)
5. **NO** marques "Initialize with README" (ya tenemos archivos)
6. Click en **"Create repository"**

### 2️⃣ Inicializar Git y Subir Archivos

Abrí PowerShell en la carpeta del proyecto (`d:\Proyectos\ies-santa-rosa`) y ejecutá:

```powershell
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit - IES Santa Rosa website"

# Conectar con GitHub (reemplazá TU-USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/ies-santa-rosa.git

# Subir archivos a GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ Activar GitHub Pages

1. En tu repositorio de GitHub, andá a **Settings** (Configuración)
2. En el menú lateral izquierdo, click en **Pages**
3. En **Source** (Fuente), seleccioná:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click en **Save** (Guardar)
5. ¡Esperá 1-2 minutos!

### 4️⃣ Ver tu Sitio Publicado

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/ies-santa-rosa/
```

Por ejemplo, si tu usuario es `juanperez`, la URL será:
```
https://juanperez.github.io/ies-santa-rosa/
```

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios, ejecutá:

```powershell
# Ver qué archivos cambiaron
git status

# Agregar los cambios
git add .

# Crear commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

Los cambios se verán en tu sitio en 1-2 minutos automáticamente.

## 🎨 Dominio Personalizado (Opcional)

Si querés usar tu propio dominio (ejemplo: `www.iessantarosa.edu.ar`):

1. Creá un archivo llamado `CNAME` en la raíz del proyecto
2. Escribí tu dominio dentro (sin http/https)
3. Configurá los DNS de tu dominio apuntando a GitHub Pages
4. Esperá 24-48 hs para la propagación

Documentación oficial: [docs.github.com/pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## ✅ Verificación

Después de activar GitHub Pages, verificá que:

- [ ] El sitio carga correctamente en la URL de GitHub Pages
- [ ] Todas las páginas son accesibles
- [ ] Las imágenes cargan (si agregaste archivos reales)
- [ ] Los links funcionan
- [ ] El diseño se ve bien en mobile y desktop

## 🆘 Problemas Comunes

### Error 404
- Verificá que GitHub Pages esté activado en Settings > Pages
- Asegurate de que el branch sea `main` y la carpeta sea `/ (root)`
- Esperá unos minutos, puede tardar en actualizarse

### CSS no carga
- Verificá que las rutas en los HTML sean relativas (no absolutas)
- Revisá que el archivo `styles.css` esté en la carpeta `css/`

### Imágenes rotas
- Asegurate de haber subido las imágenes a la carpeta `assets/img/`
- Las rutas deben ser relativas: `assets/img/logo.png`

## 📱 Alternativas Gratuitas

Si GitHub Pages no te convence, otras opciones gratis:

- **Netlify**: [netlify.com](https://www.netlify.com/) - Drag & drop, muy fácil
- **Vercel**: [vercel.com](https://vercel.com/) - Optimizado para performance
- **Cloudflare Pages**: [pages.cloudflare.com](https://pages.cloudflare.com/)
- **Render**: [render.com](https://render.com/) - Incluye SSL gratis

Todas tienen planes gratuitos perfectos para sitios estáticos.

## 🎓 Recursos Útiles

- [Documentación GitHub Pages](https://docs.github.com/en/pages)
- [Tutorial Git en español](https://git-scm.com/book/es/v2)
- [Markdown Guide](https://www.markdownguide.org/)

---

**¿Necesitás ayuda?** Consultá con el equipo de desarrollo o revisá los issues del proyecto en GitHub.
