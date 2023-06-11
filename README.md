# ApiMovieAngularCli | ScREEN

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Servidor de desarrollo
**Para poder utilizar el proyecto debes seguir estos pasos:**

1. Clonar o descargar el repositorio.
2. Abrir el proyecto en tu editor de texto.
3. Ejecutar en la termina `npm i`.
4. Al finalizar la descarga de los módulos de npm se debe ejecutar
el servidor mediante el comando `ng serve`.
## Funcionamiento del proyecto

**El proyecto está desarollado mediantes varios componentes (Home, Slider, titles, title-info)**

**Home:** Se encarga de contener los componentes y de la comunicación entre ellos. <br><br>
**Slider:** Muestra un slider con 10 títulos populares que pueden ser cambiados entre
películas y series al hacer click en el botón (Watch 10 popular Movies) 
o (Watch 10 popular Shows) desde el slider se puede visitar el contenido de cada
título desde el botón (Read more).<br><br>
**Titles:** Este componente se encarga de mostrar los títulos dependiendo de si son series
o películas, si son filtrados por género o si es una busqueda. Permite también mediante
un click revisar la información del título selccionado.<br><br>
**Title-info:** En este componente se muestra la información detallada del título seleccionado:<br>
&nbsp;&nbsp;*Poster.<br>
&nbsp;&nbsp;*Título, título original.<br>
&nbsp;&nbsp;*Fecha de lanzamiento.<br>
&nbsp;&nbsp;*Overview.<br>
&nbsp;&nbsp;*Género.<br>
&nbsp;&nbsp;*Número de votos.<br><br>

**El proyecto cuenta con:** <br>
-Buscador de Series y Películas mediantes el uso de un selector en la barra superior.<br>
-Al iniciar se muestra el slider con las 10 películas populares las cuales se pueden cambiar
a séries como antes se ha mencionado. También se muestran debajo las 10 películas y 10 séries 
populares las cuales puedes ser filtradas por genero.
