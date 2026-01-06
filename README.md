# FortaGuard - Portafolio Profesional de Ciberseguridad

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)](https://caldotwc.github.io/FortaDigital-V2/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Descripción

Sitio web portafolio profesional y visualmente impactante para **FortaGuard**, un proyecto de ciberseguridad enfocado en empoderar a las PyMEs de México con soluciones de seguridad proactivas, accesibles y fáciles de entender.

Este sitio web de una sola página (SPA) presenta la información estratégica del proyecto FortaDigital, incluyendo identidad corporativa, arquitectura técnica, métricas de rendimiento (Balanced Scorecard), equipo de trabajo, portafolio de documentos y análisis financiero.

## 🚀 Demo en Vivo

Visita el sitio web: **[https://caldotwc.github.io/FortaDigital-V2/](https://caldotwc.github.io/FortaDigital-V2/)**

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Glassmorphism**: Efectos de transparencia y blur para un look premium
- **Gradientes suaves** con paleta de colores de ciberseguridad
- **Animaciones fluidas** al hacer scroll
- **Responsive Design** - Mobile-first approach
- **Tipografía moderna** (Inter + Poppins de Google Fonts)

### 📱 Funcionalidades
- ✅ Navegación suave entre secciones
- ✅ Menú hamburguesa responsive para móviles
- ✅ Animaciones de entrada con Intersection Observer
- ✅ Counter animations para métricas y KPIs
- ✅ Progress bars animadas para indicadores del Scorecard
- ✅ Parallax sutil en hero section
- ✅ Active section highlighting en navbar
- ✅ Botón scroll to top
- ✅ Lazy loading preparado para imágenes

### 📊 Secciones del Sitio

#### 1. **Hero Section**
Presentación impactante con logo, propuesta de valor y estadísticas clave.

#### 2. **Identidad Estratégica**
- **Misión**: Empoderar a las PyMEs de México con ciberseguridad proactiva
- **Visión**: Ser el estándar de ciberseguridad para PyMEs en México
- **Valores**: Confianza, Simplicidad, Proactividad, Alianza, Innovación

#### 3. **FortaGuard Producto**
Arquitectura técnica de 4 capas:
1. **Capa de Acceso**: Portales Web (Cliente y SOC)
2. **Capa de Seguridad**: WAF + DDoS, API Gateway TLS 1.3
3. **Microservicios K8s**: EDR, Escaneo, Phishing, Capacitación
4. **Capa de Datos**: SQL Multi-tenant + NoSQL/Time-Series

#### 4. **Balanced Scorecard**
Visualización de KPIs en 4 perspectivas:
- **Financiera**: +40% ingresos, Margen neto 15%
- **Clientes**: +35% cartera, NPS >70, Retención 90%
- **Procesos Internos**: Resolución <1h, Uptime 99.9%, Fallas <5%
- **Aprendizaje**: 80% técnicos certificados, 2 nuevas herramientas

#### 5. **Equipo**
- **Cristopher Pérez** - Project Manager
- **Aldo Salazar** - Ing. Ciberseguridad / Full Stack
- **Issac Zetina** - Diseñador UI/UX
- Incluye Matriz RACI completa

#### 6. **Portafolio de Actividades**
Cards visuales para 5 documentos estratégicos:
- BalancedScorecard_FortaDigital
- CasoNegocio_FortaDigital
- CedulaDeServicio_FortaDigital
- EstudioFactibilidad_FortaDigital
- PracticaDisponibilidad_FortaDigital

#### 7. **Análisis Financiero**
- Inversión Inicial: $137,500 MXN
- Meta Ingresos: $4.5 Millones MXN anuales
- OPEX Mensual: $140,000 MXN
- Margen Bruto: >60%
- Timeline del proyecto y proyección de ROI

#### 8. **Secciones Preparadas** (con placeholders)
- **Inventario de Activos**: Grid de 9 activos con criticidad y responsables
- **Matriz de Riesgos**: Heat map con 4 riesgos identificados
- **BIA**: Business Impact Analysis con 3 procesos tácticos (RTO, RPO, MTD)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Semantic markup
- **CSS3**: Variables CSS, Flexbox, Grid, Animations
- **JavaScript (ES6+)**: Clases, Modules, Intersection Observer API
- **Google Fonts**: Inter + Poppins
- **Font Awesome 6.5.1**: Iconografía
- **GitHub Pages**: Hosting

## 📁 Estructura del Proyecto

```
FortaDigital-V2/
├── index.html              # Página principal (SPA)
├── css/
│   └── style.css          # Estilos completos con glassmorphism
├── js/
│   └── script.js          # Toda la interactividad y animaciones
├── assets/
│   ├── README.md          # Documentación de assets
│   ├── images/            # (futuro) Imágenes y logos
│   └── documents/         # (futuro) PDFs descargables
└── README.md              # Este archivo
```

## 🚀 Configuración de GitHub Pages

### Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main` (o la rama que prefieras)
   - Folder: `/ (root)`
5. Click en **Save**
6. Espera unos minutos y tu sitio estará disponible en:
   ```
   https://[tu-usuario].github.io/FortaDigital-V2/
   ```

### Dominio Personalizado (Opcional)

Si deseas usar un dominio personalizado:

1. Crea un archivo `CNAME` en la raíz del proyecto:
   ```
   tu-dominio.com
   ```
2. Configura los DNS de tu dominio:
   - Tipo A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Tipo CNAME (www): `[tu-usuario].github.io`

## 💻 Desarrollo Local

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Extensión Live Server (opcional, para desarrollo)

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/CaldoTWC/FortaDigital-V2.git
   cd FortaDigital-V2
   ```

2. **Abrir el proyecto**:
   - Opción 1: Abre `index.html` directamente en tu navegador
   - Opción 2: Usa Live Server en VS Code (click derecho > Open with Live Server)
   - Opción 3: Servidor HTTP simple con Python:
     ```bash
     python -m http.server 8000
     # Visita http://localhost:8000
     ```

### Modificar el Sitio

#### Actualizar Contenido
Edita `index.html` para cambiar textos, agregar secciones o modificar el contenido.

#### Personalizar Estilos
Edita `css/style.css`:
- Variables CSS están al inicio del archivo para fácil personalización
- Colores, espaciado, tipografía y más

#### Agregar Funcionalidades
Edita `js/script.js`:
- Estructura modular con clases ES6
- Fácil de extender y modificar

#### Agregar Imágenes
1. Coloca imágenes en `assets/images/`
2. Referencia en HTML: `<img src="assets/images/nombre.jpg" alt="...">`
3. Para lazy loading: `<img data-src="assets/images/nombre.jpg" alt="...">`

#### Agregar Documentos PDF
1. Coloca PDFs en `assets/documents/`
2. Los enlaces ya están preparados en la sección de Portafolio

## 🎨 Paleta de Colores

```css
/* Colores Primarios - Azules Ciberseguridad */
--primary-dark: #0A2463
--primary-blue: #247BA0
--primary-light: #1E90FF

/* Colores Secundarios - Cian Tecnológico */
--secondary-cyan: #00D9FF
--secondary-green: #06FFA5
--secondary-teal: #00B4D8

/* Colores de Acento */
--accent-orange: #FF6B35
--accent-yellow: #F4D35E
--accent-purple: #7B2CBF

/* Neutros */
--neutral-dark: #1A1A2E
--neutral-gray: #16213E
--neutral-light: #F5F5F5
--neutral-white: #FFFFFF
```

## ♿ Accesibilidad

El sitio está diseñado siguiendo las mejores prácticas de accesibilidad:

- ✅ Semantic HTML5 (header, nav, main, section, footer)
- ✅ ARIA labels donde es necesario
- ✅ Contraste de colores accesible (WCAG AA)
- ✅ Navegación por teclado
- ✅ Alt text preparado para imágenes
- ✅ Focus styles visibles
- ✅ Soporte para prefers-reduced-motion

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1200px
- **Large Desktop**: > 1200px

## 🔧 Optimización y Rendimiento

- ✅ CSS moderno con variables y Grid/Flexbox
- ✅ JavaScript modular y eficiente
- ✅ Intersection Observer para animaciones optimizadas
- ✅ Debouncing en scroll events
- ✅ Lazy loading preparado
- ✅ Imágenes optimizadas (cuando se agreguen)
- ✅ Minificación lista para producción

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Inicio | 29 Agosto 2025 |
| Fin MVP | 07 Enero 2026 |
| Duración | 12 meses |
| Inversión Inicial | $137,500 MXN |
| Meta Ingresos Anuales | $4.5M MXN |

## 👥 Equipo FortaDigital

- **Cristopher Pérez** - Project Manager
- **Aldo Salazar** - Ingeniero de Ciberseguridad / Full Stack Developer
- **Issac Zetina** - Diseñador UI/UX

## 📝 Licencia

© 2025 FortaGuard - FortaDigital. Todos los derechos reservados.

## 🤝 Contribuciones

Este es un proyecto privado del equipo FortaDigital. Para consultas o sugerencias, contacta al equipo directamente.

## 📧 Contacto

Para más información sobre FortaGuard y nuestros servicios de ciberseguridad:

- **Proyecto**: FortaDigital
- **Sitio Web**: [GitHub Pages](https://caldotwc.github.io/FortaDigital-V2/)
- **Repositorio**: [GitHub](https://github.com/CaldoTWC/FortaDigital-V2)

## 🔄 Changelog

### v1.0.0 (Enero 2026)
- ✅ Lanzamiento inicial del sitio web
- ✅ Implementación completa de todas las secciones
- ✅ Diseño responsive con glassmorphism
- ✅ Animaciones y efectos interactivos
- ✅ Preparación de secciones placeholder
- ✅ Optimización para GitHub Pages

## 🎯 Roadmap Futuro

- [ ] Agregar imágenes reales del equipo y logos
- [ ] Incorporar documentos PDF descargables
- [ ] Implementar sección de blog/noticias
- [ ] Agregar formulario de contacto funcional
- [ ] Integrar testimonios de clientes
- [ ] Dashboard interactivo con métricas en tiempo real
- [ ] Versión en inglés (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Integración con Google Analytics
- [ ] Chatbot de soporte

## 🙏 Agradecimientos

Gracias a todas las tecnologías open source que hicieron posible este proyecto:
- Google Fonts
- Font Awesome
- GitHub Pages
- MDN Web Docs

---

**Desarrollado con 💙 por el equipo FortaDigital**

*Empoderando a las PyMEs de México con ciberseguridad proactiva, accesible y fácil de entender.*
