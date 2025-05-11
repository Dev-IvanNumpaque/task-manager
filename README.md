# 📋 Gestor de Tareas

## 📝 Descripción

Este proyecto es una aplicación de gestión de tareas desarrollada con React, TypeScript y Vite. Permite a los usuarios crear, editar, marcar como completadas y eliminar tareas de manera intuitiva y eficiente. La interfaz de usuario está diseñada para ser limpia, moderna y fácil de usar, con un diseño responsive que se adapta a diferentes tamaños de pantalla.

## ✨ Características Principales

- **✅ Creación de tareas**: Añade nuevas tareas con un título descriptivo.
- **✏️ Edición de tareas**: Modifica el título de las tareas existentes.
- **☑️ Marcado de tareas**: Marca las tareas como completadas o pendientes.
- **🗑️ Eliminación de tareas**: Elimina las tareas que ya no necesitas.
- **📱 Interfaz responsive**: Diseño adaptable para dispositivos móviles y de escritorio.
- **🎯 Animaciones suaves**: Transiciones y efectos visuales para mejorar la experiencia de usuario.
- **💾 Almacenamiento local**: Las tareas se guardan en el almacenamiento local del navegador.

## 🛠️ Tecnologías Utilizadas

- **⚛️ React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **📘 TypeScript**: Superset de JavaScript que añade tipado estático.
- **⚡ Vite**: Herramienta de construcción que proporciona un entorno de desarrollo más rápido.
- **🎨 CSS Moderno**: Estilos con variables CSS y diseño flexible.

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/Dev-IvanNumpaque/task-manager.git

# Navegar al directorio del proyecto
cd task-manager

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## 📖 Uso

1. **➕ Añadir una tarea**: Escribe el título de la tarea en el campo de texto y haz clic en "Añadir" o presiona Enter.
2. **✓ Marcar como completada**: Haz clic en el checkbox junto a la tarea para marcarla como completada o pendiente.
3. **✏️ Editar una tarea**: Haz clic en el botón de edición (ícono de lápiz), modifica el texto y guarda los cambios.
4. **🗑️ Eliminar una tarea**: Haz clic en el botón de eliminación (ícono de papelera) para eliminar la tarea.

## 📁 Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos (imágenes, iconos)
├── components/     # Componentes React reutilizables
│   ├── TaskForm.tsx   # Formulario para crear nuevas tareas
│   ├── TaskItem.tsx   # Componente individual de tarea
│   └── TaskList.tsx   # Lista de tareas
├── types/          # Definiciones de tipos TypeScript
│   └── Task.ts        # Interfaz para el tipo Task
├── App.tsx         # Componente principal de la aplicación
├── App.css         # Estilos específicos de la aplicación
├── index.css       # Estilos globales
└── main.tsx        # Punto de entrada de la aplicación
```

## 🎭 Personalización

Puedes personalizar la apariencia de la aplicación modificando las variables CSS en los archivos `index.css` y `App.css`. Las principales variables de color y estilo se encuentran definidas en el selector `:root` de estos archivos.

## 👥 Contribución

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`)
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

Desarrollado con ❤️ usando React y TypeScript.
