# Quick-order

Input que permitirá una compra rápida en mi sitio VTEX IO

![quick-order](https://user-images.githubusercontent.com/84733911/193509552-9d65ca73-04b6-4ec7-bc61-b174afb3bf4c.png)

## Configuración
### Paso 1 - Clonación del repositorio

[Clonar](https://github.com/vtex-apps/react-app-template) el repositorio react-app-template para empezar con lo básico en cuanto a configuración inicial, una vez en la pagina del repositorio de github; hay la opción que dice `Use this template`, para hacer una copia a nuestro repositorio.

Luego, acceda al directorio del repositorio usando su terminal.

### Paso 2 - ditar el Manifest.json

Una vez en el directorio del repositorio, es hora de editar el archivo `manifest.json` de la react app template.

Una vez que esté en el archivo, debe reemplazar los valores `vendor`, `name`, `version`, `title` y `description`.

 `vendor` es el nombre de la cuenta del partner en la que está trabajando
 `name` es el nombre de como se va a llamar su componente como dependencia
 `version` la versión inicial con la que se empezará a trabajar
 `title` título del componente que no está sujeto a como se va a declarar como dependencia por lo que puede ser cualquier título que desee
 `description` pequeña descripción para lo que sirve el componente
 
Ejemplo:

```json
{
  "vendor": "partner",
  "name": "name-component",
  "version": "0.0.x",
  "title": "Titulo del Componente",
  "description": "Pequeña descripción para lo que sirve el componente",
  ...
}
```

### Paso 3 - Configurar el builder store

Para que el componente funcione correctamente se debe declara el builder store en el `manifest.json`. 

Ejemplo:

```json
{
  "builders": {
    ...
    "store": "0.x"
  },
  ...
}
```

Luego de eso hay que crear una carpeta llamada store en la carpeta superior del componente, esa carpeta `store` tendrá un archivo llamado `interfaces.json`.

Ejemplo:

```json
{
  "name-component": {                     // El name que se declara en el manifest.json de la app vtex
    "component": "new-name",              // El nombre del componente del cual se va a ser alimentado
    "render": "client"                    // Esta propiedad se le instaura si sólo va a ser utilizada por el cliente
  }
}
```

### Paso 4 - Declarar dependencies necesarias

En el `manifest.json` se debe declarar las dependencias que van a ser utilizadas en el componente deseado. 

Ejemplo:

```json
...
"dependencies": {
  "vtex.dependencies": "0.x",
  "vtex.dependencies": "0.x"
},
...
```

### Paso 5 - Editar el package.json

El primer `package.json` es el global, está al lado del `manifest.json`, vamos a cambiar su `version` y `name`.
 
Ejemplo:

```json
{
  "version": "0.0.x",
  "name": "name-component",
  ...
}
```

Y repetiremos el mismo proceso con el `package.json` que hay dentro de la carpeta de react.

### Paso 6 - Instalar dependencias de react

Para este paso debes ingresar a la carpeta de react, y una vez allí debes ejecutar en tu consola el comando
```json
partner-name-componet/react> yarn
```
para que se instalen todas las dependencias necesarias

### Paso 7 - Crear componente

En la carpeta de react se debe crear el archivo con el que se va a trabajar, ejemplo: `name.tsx`, luego crear su carpeta de componentes y empezar a desarrollar

### Paso 8 - Ejecute un preview de la tienda

Entonces ha llegado el momento de cargar todos los cambios que realizó en sus archivos locales a la plataforma. Para eso, use el comando `vtex link`.

Si el proceso se ejecuta sin ningún error, se mostrará el siguiente mensaje: `Aplicación vinculada con éxito`. Luego, ejecute el comando `vtex browser` para abrir una ventana del navegador que tenga su tienda vinculada.

Esto le permitirá ver los cambios aplicados en tiempo real, a través de la cuenta y el espacio de trabajo en el que está trabajando.

## Dependencies

1. "vtex.checkout-graphql"
2. "vtex.search-graphql"

## Contributors

1. Ruben Dario Suarez
