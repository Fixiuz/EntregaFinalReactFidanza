
# Proyecto Final - ReactJS Julio Fidanza

Este proyecto es una SPA de ReactJS hecha con Vite y deployada con Netlify.
Se utilizo Firebase como base de datos


Se trata de un E-commerce de productos 3D " K3D " un emprendimiento domestico y pequeño que apunta al crecimiento buscando brindar soluciones practicas para problemas de la vida cotidiana ademas de figuras plasticas por encargue






## Componentes

| Componente                | Descripción                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `App.jsx`                 | Componente raíz con las rutas principales del sitio.           |
| `main.jsx`                | Punto de entrada de la aplicación.                             |
| `firebaseConfig.js`       | Configuración de conexión a Firebase.                          |
| `context/context.jsx`     | Contexto global para el carrito y funciones compartidas.       |
| `Buscar.jsx`              | Buscador de productos.                                         |
| `Cart.jsx`                | Vista principal del carrito.                                   |
| `CartSidebar.jsx`         | Carrito lateral que se muestra como resumen.                   |
| `CartWidget.jsx`          | Ícono del carrito en la navbar con cantidad de productos.      |
| `CheckoutForm.jsx`        | Formulario para finalizar compra e ingresar datos del cliente. |
| `Contacto.jsx`            | Formulario de contacto.                 |
| `Factura.jsx`             | Componente que genera una factura tras completar la compra.    |
| `Footer.jsx`              | Pie de página con enlaces e información adicional.             |
| `Item.jsx`                | Tarjeta individual para mostrar un producto.                   |
| `ItemCount.jsx`           | Componente de control de cantidad (+/-).                       |
| `ItemDetail.jsx`          | Detalle ampliado de un producto seleccionado.                  |
| `ItemDetailContainer.jsx` | Contenedor que carga datos de un solo ítem.                    |
| `ItemList.jsx`            | Lista de productos.                                            |
| `ItemListContainer.jsx`   | Contenedor principal de productos.                             |
| `Laboratorio.jsx`         | Página donde mostramos nuestro laboratorio y espacio de trabajo.            |
| `Loader.jsx`              | Animación o mensaje de carga mientras se obtienen datos.       |
| `NavBar.jsx`              | Barra de navegación con enlaces y acceso al carrito.           |
| `QuienesSomos.jsx`        | Página institucional sobre el equipo.                |
| `Sidebar.jsx`             | Sidebar izquierdo con enlaces o navegación adicional.          |

## Tech Stack

El proyecto fue desarrollado utilizando las siguientes tecnologías y librerías:

React – Framework principal del proyecto.

Vite – Herramienta de desarrollo rápida para React.

React Router DOM – Manejo de rutas SPA.

Firebase – Backend para autenticación, almacenamiento de órdenes y base de datos.

Bootstrap – Framework de estilos CSS para componentes responsivos.

React Icons – Íconos SVG listos para usar dentro de componentes React.

React Pro Sidebar – Sidebar profesional para navegación lateral.

Context API – Manejo de estado global para el carrito.


CSS Modules – Estilado modular por componente.

CSS personalizado – Diseño estético para cada componente.


## Deployment

Este sitio esta deployado en netlify 
https://entregafinalfidanza.netlify.app/

```bash
  npm run deploy
```


# Installation

Para instalar el proyecto lo descargamos y luego ejecutamos.

```bash
  git clone https://github.com/Fixiuz/EntregaFinalReactFidanza
  
  cd EntregaFinalReactFidanza
```
Asegurate de tener Node.js y npm instalados. Luego ejecutá:

```bash
  npm install
  
```
Esto instalará todas las dependencias necesarias listadas en package.json.

## Ejecutar la aplicación en modo desarrollo
```bash
  npm run dev
  
```
Esto iniciará el servidor de desarrollo con Vite. Podés acceder al sitio en:

http://localhost:5173/


    ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
|Color primario | ![#155d9e](https://via.placeholder.com/10/0a192f?text=+) ##155d9e |
|Color Secundario | ![#13286d](https://via.placeholder.com/10/f8f8f8?text=+) #13286d |
|Color Terciario | ![rgba(100, 100, 100, 0.3)](https://via.placeholder.com/10/00b48a?text=+) rgba(100, 100, 100, 0.3) |


## Authors

- [Julio Fidanza](https://github.com/Fixiuz)


## LOGO
Tanto el logo como todas las imagenes del sitio se encuentra ene cloudinary.

![Logo](https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746232881/1_yju83b.png)

