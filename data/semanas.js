/**
 * ============================================================
 * data/semanas.js  —  AQUÍ agregas tus apuntes de cada semana
 * ============================================================
 *
 * INSTRUCCIONES:
 * Cada objeto dentro del array "semanas" es una semana.
 * Campos disponibles:
 *
 *   titulo   (string)  — Nombre de la semana.
 *   fecha    (string)  — Fecha en formato "DD/MM/YYYY".
 *   notas    (string)  — Apuntes en texto plano.
 *                        Puedes usar saltos de línea con \n.
 *   imagenes (array)   — Lista de rutas a imágenes dentro de
 *                        la carpeta assets/img/.
 *                        Ejemplo: ["assets/img/diagrama1.png"]
 *   reflexion (string) — Tu reflexión de la semana.
 *   bibliografia (array) — Lista de referencias o URLs.
 *
 * AGREGAR UNA SEMANA NUEVA:
 *   1. Copia el bloque de ejemplo al final del array.
 *   2. Rellena los campos con tu información.
 *   3. Guarda el archivo.
 *   4. Abre index.html en el navegador (o haz push a GitHub Pages).
 *
 * ============================================================
 */

const semanas = [

  /* ── Semana 1 ─────────────────────────────────────────── */
  {
    titulo: "Semana 1",
    fecha:  "07/04/2026",

    notas: `## Fundamentos de las Tecnologías Web
Las tecnologías web permiten crear aplicaciones y servicios accesibles mediante internet usando navegadores web. Estas tecnologías facilitan la comunicación entre clientes (usuarios) y servidores para compartir información de manera rápida y segura.
## Soluciones Web
### Sistema Web
Es un conjunto de componentes y funcionalidades conectadas mediante internet que permiten realizar procesos específicos, como sistemas académicos, bancarios o empresariales.
### Aplicación Web
Es un software que funciona desde un navegador web sin necesidad de instalación local. Permite interacción dinámica con el usuario.
**Ejemplos:** Gmail, Google Docs, Facebook.
### Sitio Web
Es un conjunto de páginas web relacionadas bajo un mismo dominio y estructura.
**Ejemplo:** www.openai.com
### Página Web
Es un documento individual dentro de un sitio web que contiene información visual, texto, imágenes o videos.
## Tecnologías Web Básicas
### HTML
Lenguaje utilizado para estructurar el contenido de una página web.
### CSS
Lenguaje encargado del diseño y la apariencia visual de las páginas web.
### JavaScript
Lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web.
[img: assets/img/HTML-CSS-JS.webp | Tecnologías Web Básicas]
## Lenguajes y Tecnologías Complementarias
- **PHP:** Desarrollo backend.
- **Python:** Desarrollo web y procesamiento de datos.
- **SQL:** Gestión de bases de datos.
- **XML:** Intercambio y almacenamiento de información.
- **JSON:** Formato ligero para intercambio de datos.
### Tecnologías Gráficas Web
### SVG
Formato gráfico vectorial utilizado para imágenes escalables sin pérdida de calidad.
### WebGL
Tecnología que permite gráficos 2D y 3D acelerados por hardware dentro del navegador.
## Funcionamiento de la Web
### DNS (Domain Name System)
Sistema que traduce nombres de dominio en direcciones IP para localizar servidores en internet.
### Protocolo TCP/IP
Conjunto de protocolos que permiten la comunicación y transmisión de datos entre dispositivos conectados a internet.
### Protocolo HTTP/HTTPS
Protocolos utilizados para transferir información entre navegadores y servidores web.
- **HTTP:** Comunicación estándar.
- **HTTPS:** Comunicación segura mediante cifrado SSL/TLS.
## Roles en el Desarrollo de Aplicaciones para Internet
### Desarrollador Frontend
Se encarga de la parte visual e interactiva que ve el usuario.
**Tecnologías:** HTML, CSS, JavaScript.
### Desarrollador Backend
Gestiona la lógica del servidor, bases de datos y procesamiento interno de la aplicación.
**Tecnologías:** PHP, Python, Node.js, SQL.
### Desarrollador Fullstack
Combina conocimientos de frontend y backend para desarrollar aplicaciones completas.
## Exposición del silabo`,

    reflexion: `La información sobre tecnologías web permite comprender cómo internet y las aplicaciones modernas funcionan actualmente. Conocer conceptos como HTML, CSS, JavaScript, protocolos de comunicación y roles de desarrollo ayuda a entender que la web no solo consiste en páginas visuales, sino en una infraestructura compleja que conecta sistemas, usuarios y servicios a nivel mundial. Además, aprender sobre frontend, backend y fullstack demuestra la importancia del trabajo colaborativo y especializado dentro del desarrollo de software, donde cada rol contribuye al funcionamiento eficiente y seguro de las aplicaciones web.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf"
    ]
  },

  /* ── Semana 2 */
  {
    titulo: "Semana 2",
    fecha:  "14/04/2026",

    notas: `## Tipos de Desarrollo de Software
- **Software nativo:** Aplicaciones desarrolladas para un sistema operativo específico.
- **Tecnología web:** Aplicaciones accesibles desde navegadores y adaptables a distintos dispositivos mediante diseño responsive.
## Tipos de Web
### Web Superficial
Parte pública de internet accesible mediante buscadores como Google o Bing.
### Deep Web
Contenido no indexado por buscadores, como correos, bases de datos y sistemas privados.
### Dark Web
Zona oculta de internet accesible con herramientas como :contentReference[oaicite:0]{index=0}, utilizada tanto para anonimato como para actividades ilegales.
### Marianas Web
Concepto teórico relacionado con supuestas capas profundas y secretas de internet sin evidencia real.
### Capa Mediadora
Idea especulativa relacionada con sistemas de control y filtrado de acceso, similares a VPN y firewalls.
### La Fog
Representa el caos digital asociado a malware, botnets y datos corruptos.
### Sistema Primarca
Teoría sobre una entidad autónoma que controlaría funciones ocultas de internet.
[img: assets/img/nivelesweb.webp | Niveles de la Web]
## Open Web Platform
Conjunto de tecnologías y estándares abiertos para el desarrollo web.
### Organizaciones principales
- W3C
- Unicode Consortium
- Internet Engineering Task Force
- ECMA International
### Tecnologías
- HTML5
- CSS
- ECMAScript
- SVG
- MathML
- WAI-ARIA
- WebGL
### Principios
- Transparencia
- Integración
- Libertad de uso
- Documentación abierta
## Funcionamiento de la Web
La infraestructura de internet está compuesta por:
- Nodos (routers)
- Gateways o pasarelas
- Sistemas Autónomos (AS)
## Estándares para el Desarrollo Web
### Principales
- HTTP / HTTPS
- HTML
- CSS
- XML
- JavaScript
### Complementarios
- Web API
- SVG
- WebGL
- MathML`,

    reflexion: `La clase permitió comprender que el desarrollo web no solo consiste en crear páginas visuales, sino también en conocer cómo funciona internet, sus tecnologías y estándares. Además, se identificó la importancia de herramientas abiertas como HTML, CSS y JavaScript para construir aplicaciones accesibles y adaptables a distintos dispositivos. Finalmente, el desarrollo del portafolio web representa una oportunidad para aplicar progresivamente los conocimientos aprendidos durante el curso.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf"
    ]
  },

  /* ── Semana 3  */
  {
    titulo: "Semana 3",
    fecha:  "21/04/2026",

    notas: `## Frontend
### Desarrollo del lado del cliente
El frontend es la parte visible de una aplicación web con la que interactúa el usuario. Se encarga del diseño, estructura e interactividad de las páginas.
#### Tecnologías principales
- HTML
- CSS
- JavaScript
#### Frameworks
- React
- Vue
- Angular
#### Herramientas
- Vite
- Webpack
## Backend
### Desarrollo del lado del servidor
El backend procesa la lógica de la aplicación, administra la información y se conecta con las bases de datos.
#### Lenguajes
- JavaScript (Node.js)
- Python
- Java
#### Frameworks
- Express
- Django
- Spring Boot
#### Bases de datos
- MongoDB
- PostgreSQL
- MySQL
#### APIs
- REST
- GraphQL
[img: assets/img/frontend_vs_backend.webp | Frontend vs Backend]
## Diseño UX/UI
### Experiencia de Usuario e Interfaz
El diseño UX/UI busca crear interfaces atractivas, funcionales y fáciles de usar.
### UX (User Experience)
Se enfoca en la experiencia del usuario, usabilidad y navegación.
### UI (User Interface)
Se enfoca en el diseño visual: colores, botones, tipografía y distribución.
#### Herramientas de diseño
- Figma
- Adobe XD
- Sketch
- Balsamiq
- Photoshop
- Illustrator
#### Principios básicos
- Simplicidad
- Consistencia
- Accesibilidad
- Retroalimentación visual
- Jerarquía visual
[img: assets/img/ux-ui.webp | Diseño UX/UI]`,

    reflexion: `La clase permitió comprender que el desarrollo web moderno requiere la integración de varias áreas especializadas. El frontend se encarga de la interacción visual con el usuario, mientras que el backend administra la lógica y los datos del sistema. Además, el diseño UX/UI cumple un papel fundamental al garantizar que las aplicaciones sean atractivas, intuitivas y accesibles. La combinación de estas áreas permite crear aplicaciones web funcionales y con una mejor experiencia para los usuarios.`,

    bibliografia: [
      "Rubiales (2021). Curso de desarrollo Web. HTML, CSS y JavaScript. ANAYA. https://anayamultimedia.es/primer_capitulo/curso-de-desarrollo-web-html-css-y-javascript-edicion-2021.pdf",
    ]
  },


  /* ── Semana 4  */
  {
    titulo: "Semana 4",
    fecha:  "28/04/2026",

    notas: `## Motores JavaScript
Los motores JavaScript son programas complejos (intérpretes y compiladores Just-In-Time o JIT) encargados de traducir el código fuente a código de máquina para que el procesador pueda ejecutarlo rápidamente, ya sea en el navegador o en el servidor.
### Motores más conocidos
- **V8:** Desarrollado por Google. Es de código abierto, altamente optimizado y el motor detrás de Google Chrome, Node.js y Deno.
- **SpiderMonkey:** El primer motor de JavaScript de la historia, desarrollado por Netscape y actualmente mantenido y utilizado por Mozilla Firefox.
- **JavaScriptCore:** También conocido como Nitro, es el motor desarrollado por Apple para su navegador Safari y el ecosistema WebKit.
## Variables y Operadores
Las variables actúan como contenedores intermedios que permiten almacenar, referenciar y manipular datos en la memoria de un programa.
### Declaración de variables
- **var:** La forma tradicional (ES5). Tiene alcance de función (function-scope) y permite la reinicialización, pero puede causar problemas debido al hoisting (elevación).
- **let:** Introducido en ES6. Tiene alcance de bloque (block-scope), lo que significa que solo existe dentro de las llaves donde se declaró. Es ideal para valores que van a cambiar.
- **const:** Introducido en ES6. También tiene alcance de bloque, pero define una constante. Su valor no puede ser reasignado una vez definido (aunque si almacena un objeto o array, sus propiedades sí pueden mutar).
### Operadores principales
- **Aritméticos (+, -, *, /, %):** Permiten realizar operaciones matemáticas. Se incluye el módulo (%) para obtener el resto de una división.
- **Comparación (==, ===, !=, !==):** == compara solo el valor (hace conversión de tipo implícita), mientras que === es la comparación estricta, evaluando que coincidan tanto el valor como el tipo de dato.
- **Lógicos (&&, ||, !):** Permiten combinar o invertir condiciones booleanas (AND, OR y NOT respectivamente).
## Tipos de Datos
En JavaScript los tipos de datos se dividen principalmente en Primitivos (inmutables y se pasan por valor) y Objetos (mutables y se pasan por referencia).
- **Números (Number):** Representan valores numéricos, tanto enteros como decimales (punto flotante). JavaScript no diferencia entre integers y floats. También incluye valores especiales como NaN (Not a Number) e Infinity.
- **Strings:** Cadenas de caracteres delimitadas por comillas simples, dobles o backticks, estos últimos permiten interpolar variables fácilmente.
- **Booleanos:** Representan una entidad lógica y solo pueden tener dos valores: true (verdadero) o false (falso).
- **Otros tipos primitivos:**
  - **null:** Representa intencionalmente la ausencia total de valor o un objeto "vacío".
  - **undefined:** Indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor.
- **Objetos y Estructuras Complejas:**
  - **Objetos (Object):** Estructuras clave-valor que agrupan propiedades (datos) y métodos (funciones).
  - **Arrays:** Colecciones ordenadas de elementos (que técnicamente en JavaScript son un tipo especial de objeto) indexados numéricamente a partir del 0.
## Estructuras de Control y Bucles
Permiten romper la ejecución lineal del código para tomar decisiones o repetir tareas según las necesidades del flujo del programa.
### Condicionales
- **if / else if / else:** Evalúa una condición boojana; si es verdadera ejecuta un bloque de código, de lo contrario pasa al siguiente.
- **switch:** Evalúa una sola expresión comparando su valor con múltiples casos, ideal para evitar estructuras condicionales demasiado largas.
### Bucles
- **for:** Ideal cuando se conoce de antemano el número exacto de iteraciones que se desean realizar.
- **while:** Ejecuta un bloque de código continuamente mientras una condición dada sea verdadera.
- **do while:** Similar al while, con la garantía de que el bloque de código se ejecutará al menos una vez antes de evaluar la condición.
## Funciones
Las funciones son los bloques de construcción fundamentales en JavaScript; encapsulan lógica reutilizable y modular.
### Sintaxis e Invocación
Una función puede declararse y luego ejecutarse mediante su nombre.
### Funciones Anónimas
Funciones sin nombre utilizadas normalmente como parámetros o expresiones.
### Función Objeto
Las funciones en JavaScript pueden tratarse como objetos.
### Funciones Flecha
Sintaxis moderna y simplificada para declarar funciones usando =>.
### Funciones Auto Invocadas
Funciones que se ejecutan automáticamente al ser definidas.
### Closures
Funciones que conservan acceso a variables de su contexto externo incluso después de ejecutarse.
## Practica de Git y GitHub`,

    reflexion: `La clase permitió comprender los fundamentos de JavaScript, incluyendo variables, operadores, tipos de datos, estructuras de control y funciones, elementos esenciales para el desarrollo de aplicaciones web dinámicas. Además, la práctica realizada con Git y GitHub ayudó a fortalecer el manejo de control de versiones y la gestión de proyectos colaborativos, habilidades importantes dentro del desarrollo de software moderno.`,

    bibliografia: [
      "MoureDev (s.f.). Hello-git. https://github.com/mouredev/hello-git/tree/0a3e7e416c5ef94e908babf0bba32c18559c6816"
    ]
  },

/* ── Semana 5  */
  {
    titulo: "Semana 5",
    fecha:  "05/05/2026",

    notas: `## ¿Qué es React?
React es una biblioteca de JavaScript desarrollada por Meta para construir interfaces de usuario mediante componentes reutilizables. Utiliza un modelo Client Side Rendering (CSR) donde el navegador construye la UI.
### Herramientas del Ecosistema:
- **Vite:** Bundler ultrarrápido para crear proyectos React modernos.
- **npm / pnpm / yarn:** Gestores de dependencias y paquetes.
- **React DOM:** Renderiza componentes en el navegador.
- **React DevTools:** Extensión para inspeccionar el árbol de componentes.
### Estructura de un Proyecto Vite + React:
- **src/:** Código fuente de la aplicación.
- **public/:** Archivos estáticos (imágenes, fuentes).
- **package.json:** Dependencias y scripts.
- **vite.config.ts:** Configuración del bundler.
- **index.html:** Punto de entrada del HTML.
## JSX: JavaScript + XML
JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro del código JS. Babel lo transforma a llamadas React.createElement().
### Reglas de JSX:
- Retornar un único elemento raíz (o usar <Fragment> / <></>).
- Cerrar todas las etiquetas, incluso las de auto-cierre: <img />
- Usar className en lugar de class.
- Usar htmlFor en lugar de for en labels.
- Expresiones JS entre llaves: { variable }
- Estilos inline como objeto: style={{ color: "red" }}
### Renderizado Condicional en JSX:
- **Ternario:** { condicion ? <A /> : <B /> }
- **AND:** { condicion && <Componente /> }
- **Nullish:** { valor ?? <Default /> }
## Componentes, Props y Children
Un componente es una función de JavaScript que recibe datos (props) y retorna JSX. Los componentes son la unidad básica de construcción en React.
### Props:
- Los props pasan datos del componente padre al hijo (flujo unidireccional).
- Son de solo lectura dentro del componente que los recibe.
- Se desestructuran: function Card({ title, desc }) { }
- Valores por defecto: function Btn({ color = "red" }) { }
### Children:
- Prop especial que representa el contenido anidado del componente.
- Acceso: { children } en los parámetros del componente.
- Permite componer componentes de forma flexible como contenedores.
### Buenas Prácticas:
- Nombres de componentes siempre en PascalCase.
- Un componente, una responsabilidad (principio SRP).
- Componentes pequeños y reutilizables.
## Estrategias de Estilos en React
Existen múltiples enfoques para aplicar estilos en una aplicación React, cada uno con sus ventajas según el contexto.
- **1. Estilos Inline:** Se pasan como objeto JS directamente al atributo style. Útil para estilos dinámicos basados en props o estado. No soporta pseudo-clases ni media queries.
- **2. Style Sheets Globales:** Archivos .css importados en el componente. Los estilos son globales y pueden causar colisiones de nombres en proyectos grandes.
- **3. CSS Modules:** Archivos .module.css con alcance local por componente. Las clases se importan como un objeto JS, evitando colisiones globales.
- **4. Framework CSS (Tailwind):** Clases utilitarias aplicadas directamente en el JSX. Alta productividad, consistencia de diseño y excelente integración con React y Vite.
- **5. Styled Components:** CSS-in-JS que genera componentes con estilos encapsulados usando template literals. Soporta props dinámicas y theming avanzado.
## GINKANA
[img: assets/img/ginkana.webp | GINKANA]`,

    reflexion: `La clase permitió comprender cómo React facilita el desarrollo de aplicaciones modernas mediante componentes reutilizables y una estructura organizada. El uso de JSX, props y children demuestra cómo React mejora la construcción de interfaces dinámicas y mantenibles. Además, conocer herramientas como Vite y diferentes estrategias de estilos ayuda a desarrollar proyectos más escalables, eficientes y adaptables a las necesidades actuales del desarrollo frontend.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },
  
  /* ── Semana 6  */
  {
    titulo: "Semana 6",
    fecha:  "12/05/2026",

    notas: `## Eventos en React
Los eventos permiten ejecutar acciones cuando el usuario interactúa con la aplicación.
### Eventos comunes
- **onClick**: Se ejecuta al hacer clic sobre un elemento.
- **onChange**: Detecta cambios en inputs o formularios.
- **onSubmit**: Maneja el envío de formularios.
- **onMouseOver**: Se activa cuando el cursor pasa sobre un elemento.
Los eventos en React se manejan mediante funciones JavaScript asociadas a componentes.
## Renderizado Condicional
Permite mostrar diferentes elementos según una condición específica.
### Métodos comunes
- **Operador ternario**: Muestra un elemento u otro dependiendo de la condición.
- **Operador &&**: Renderiza contenido solo si la condición es verdadera.
- **Condiciones con if**: Permiten controlar qué componente o contenido mostrar.
Se utiliza para mensajes dinámicos, validaciones y control de vistas.
## Renderizado Iterativo
Permite mostrar listas de datos de forma dinámica recorriendo arreglos.
### Método principal
- **map()**: Recorre un arreglo y genera componentes o elementos JSX automáticamente.
Cada elemento renderizado debe incluir una propiedad key única para mejorar el rendimiento de React.
## Formularios en React
Los formularios permiten capturar información ingresada por el usuario.
### Elementos comunes
- **Inputs**: Capturan texto o datos específicos.
- **Select**: Permite seleccionar opciones de una lista.
- **Textarea**: Se utiliza para textos largos.
- **Buttons**: Ejecutan acciones o envían formularios.
React normalmente utiliza componentes controlados mediante useState.
## Routing en React
El routing permite navegar entre páginas sin recargar el navegador.
### Librería principal
- **React Router DOM**: Administra la navegación dentro de la aplicación.
### Componentes importantes
- **BrowserRouter**: Envuelve la aplicación y habilita el enrutamiento.
- **Routes**: Contiene todas las rutas disponibles.
- **Route**: Define qué componente mostrar según la URL.
- **Link**: Permite navegar entre páginas sin recargar.
## Consumo de APIs
Las APIs permiten intercambiar información entre el frontend y un servidor.
### Operaciones comunes
- **GET**: Obtiene información desde el servidor.
- **POST**: Envía nuevos datos.
- **PUT**: Actualiza información existente.
- **DELETE**: Elimina información del servidor.
## Promesas y Async/Await
Las promesas permiten manejar tareas asíncronas como peticiones a servidores.
### Async/Await
Facilita escribir código asíncrono de forma más ordenada y legible usando funciones async y await.
## Obtención de Datos desde una API
React permite consumir datos externos y mostrarlos dinámicamente en la interfaz.
### Hooks utilizados
- **useEffect**: Ejecuta lógica cuando el componente se renderiza.
- **useState**: Almacena y actualiza datos obtenidos desde la API.
## Librería Axios
Es una librería utilizada para realizar solicitudes HTTP de manera sencilla.
### Ventajas
- **Sintaxis más limpia**: Simplifica las peticiones HTTP.
- **Manejo automático de JSON**: Convierte respuestas automáticamente.
- **Mejor control de errores**: Facilita detectar fallos en solicitudes.
- **Interceptores**: Permiten modificar solicitudes y respuestas antes de procesarlas.`,

    reflexion: `La clase permitió comprender cómo React facilita el desarrollo de aplicaciones dinámicas mediante eventos, renderizado condicional y manejo de listas. Además, el uso de formularios, routing y consumo de APIs demuestra cómo una aplicación frontend puede interactuar con servidores y mostrar información en tiempo real. Finalmente, herramientas como async/await y Axios ayudan a escribir código más organizado y eficiente para manejar operaciones asíncronas.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },

  /* ── Semana 7  */
  {
    titulo: "Semana 7",
    fecha:  "19/05/2026",

    notas: `## Hooks en React
Los hooks son funciones especiales de React que permiten manejar estados, efectos y otras funcionalidades dentro de componentes funcionales.
## useState
useState permite crear y actualizar estados dentro de un componente.
### Funciones principales
- Almacenar datos dinámicos.
- Actualizar la interfaz cuando cambia el estado.
- Manejar formularios, contadores y listas.
### Sintaxis básica
~~~javascript
js
const [valor, setValor] = useState(valorInicial)
~~~
## useEffect
useEffect permite ejecutar código cuando el componente se renderiza o cambia su estado.
### Usos comunes
- Consumir APIs.
- Ejecutar validaciones.
- Escuchar eventos.
- Ejecutar código al iniciar el componente.
### Funcionamiento
Se ejecuta automáticamente dependiendo de sus dependencias.
## useContext
useContext permite compartir información entre múltiples componentes sin enviar props manualmente.
### Funciones principales
- Compartir datos globales.
- Evitar el “prop drilling”.
- Manejar temas, usuarios o configuraciones.
## useRef
useRef permite almacenar referencias o valores sin provocar renderizados.
### Usos comunes
- Acceder a elementos del DOM.
- Mantener valores persistentes.
- Controlar inputs o temporizadores.
## useReducer
useReducer permite manejar estados complejos mediante acciones y reducers.
### Funciones principales
- Centralizar cambios de estado.
- Organizar lógica compleja.
- Trabajar con múltiples actualizaciones.
### Elementos básicos
- Estado
- Acción
- Reducer
## useCallback
useCallback memoriza funciones para evitar recrearlas en cada renderizado.
### Beneficios
- Optimiza rendimiento.
- Evita renderizados innecesarios.
- Mejora componentes reutilizables.
## useMemo
useMemo memoriza resultados de operaciones costosas.
### Funciones principales
- Optimizar cálculos complejos.
- Evitar ejecuciones repetidas.
- Mejorar rendimiento de la aplicación.
## Hooks Personalizados
Los hooks personalizados son funciones creadas por el desarrollador utilizando otros hooks de React.
### Características
- Reutilizan lógica entre componentes.
- Mejoran organización del código.
- Facilitan mantenimiento y escalabilidad.
### Regla principal
Deben iniciar con la palabra use.`,

    reflexion: `La clase permitió comprender la importancia de los hooks en React para desarrollar aplicaciones modernas y dinámicas. Hooks como useState y useEffect facilitan el manejo de estados y eventos del ciclo de vida, mientras que herramientas como useContext, useReducer y useMemo ayudan a organizar mejor la lógica y optimizar el rendimiento. Además, los hooks personalizados permiten reutilizar código y construir aplicaciones más escalables y mantenibles.`,

    bibliografia: [
      "Wieruch (2018). The Road to learn React. Leanpub."
    ]
  },
];