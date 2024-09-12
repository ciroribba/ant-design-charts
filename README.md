
# Proyecto Dashboard con React, Ant Design y Ant Design Charts

Este proyecto es una implementación básica de **React** usando las librerías **Ant Design** y **Ant Design Charts/Plots** para renderizar gráficos, enfocado en proyectos de dashboards. Utiliza **pnpm** para la gestión de paquetes.

## Requisitos

- **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
- **pnpm**: Si aún no lo tienes, puedes instalarlo con el siguiente comando:
  
  ```bash
  npm install -g pnpm
  ```

## Instalación

Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/usuario/nombre-del-proyecto.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias utilizando **pnpm**:

   ```bash
   pnpm install
   ```

## Uso

Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:

```bash
pnpm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver la aplicación en tu navegador, generalmente en [http://localhost:5173](http://localhost:5173).

## Librerías Utilizadas

- **Ant Design**: Librería de componentes UI para crear interfaces de usuario elegantes y modernas. [Documentación de Ant Design](https://ant.design/docs/react/introduce)
  
- **Ant Design Charts/Plots**: Librería para la visualización de gráficos y datos, ideal para proyectos de dashboard. [Documentación de Ant Design Charts](https://charts.ant.design/en)

## Características

- Implementación de componentes visuales de **Ant Design** para construir el layout del dashboard.
- Uso de **Ant Design Charts** para crear gráficos interactivos y visualizaciones de datos.
- Adecuado para la creación rápida de dashboards personalizados.

## Scripts Disponibles

- **`pnpm run dev`**: Inicia el servidor de desarrollo.
- **`pnpm run build`**: Compila la aplicación para producción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue los pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un **Pull Request**.

------------------------------------------------------------------------------------

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
