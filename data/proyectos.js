/**
 * ============================================================
 * data/proyectos.js  —  AQUÍ agregas tus proyectos de GitHub
 * ============================================================
 *
 * Campos de cada proyecto:
 *
 *   titulo      (string)  — Nombre del proyecto.
 *   descripcion (string)  — Resumen breve de qué hace.
 *   tecnologias (array)   — Lista de tecnologías usadas.
 *   icono       (string)  — Emoji representativo (opcional).
 *   github      (string)  — URL completa al repositorio.
 *                           Pon "#" si aún no está publicado.
 *   destacado   (boolean) — true = muestra borde azul especial.
 *
 * ============================================================
 */

const proyectos = [

  {
    titulo:      "Proyecto Web 01",
    descripcion: "Descripción pendiente. Aquí irá el resumen de qué hace este proyecto, qué problema resuelve y qué aprendizajes dejó.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    icono:       "🌐",
    github:      "https://github.com/tu-usuario/repo-01",
    destacado:   false
  },

  {
    titulo:      "Proyecto Backend 02",
    descripcion: "Descripción pendiente. Aquí irá el resumen de qué hace este proyecto, qué problema resuelve y qué aprendizajes dejó.",
    tecnologias: ["PHP", "Laravel", "MySQL"],
    icono:       "🛠️",
    github:      "https://github.com/tu-usuario/repo-02",
    destacado:   false
  },

  {
    titulo:      "Proyecto Base de Datos 03",
    descripcion: "Descripción pendiente. Aquí irá el resumen de qué hace este proyecto, qué problema resuelve y qué aprendizajes dejó.",
    tecnologias: ["MySQL", "PHP"],
    icono:       "🗄️",
    github:      "https://github.com/tu-usuario/repo-03",
    destacado:   false
  },

  {
    titulo:      "Proyecto Seguridad 04",
    descripcion: "Descripción pendiente. Aquí irá el resumen de qué hace este proyecto, qué problema resuelve y qué aprendizajes dejó.",
    tecnologias: ["Python", "Ciberseguridad"],
    icono:       "🔐",
    github:      "#",
    destacado:   false
  },

  {
    titulo:      "Proyecto Responsivo 05",
    descripcion: "Descripción pendiente. Aquí irá el resumen de qué hace este proyecto, qué problema resuelve y qué aprendizajes dejó.",
    tecnologias: ["HTML", "CSS", "Responsive"],
    icono:       "📱",
    github:      "#",
    destacado:   false
  },

  {
    titulo:      "Proyecto UNCP 06",
    descripcion: "Proyecto desarrollado durante las prácticas en la Oficina de Tecnología de la UNCP. Detalles por completar.",
    tecnologias: ["Laravel", "MySQL", "Git"],
    icono:       "⚙️",
    github:      "#",
    destacado:   true
  }

];
