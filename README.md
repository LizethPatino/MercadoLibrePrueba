# Challenge Frontend Mercado Libre


## Comenzando 🚀

_Estas instrucciones te permitirán realizar el montaje de esta aplicación en tu equipo:


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software_

```
* Node js >= 6
* Git >= 6
* Npm = 6.14.9

```

### Instalación 🔧

_En este proyecto se encuentra desacoplado el back y el front, la razón por la cual se realiza, es permitir a futuro si es necesario la integración de otras tecnologias para back o front o el consumo de tecnologias y/o servicios de terceros; Esto ayuda a favorecer el desacoplamiento de la aplicación._



```
Pasos para realizar la instalación y compilación de la aplicación:

Debes clonar el repositorio en la ubicación que desees de tu equipo.

Luego ir a la carpeta back y estando alli realizar en consola el comando npm install, finalmente ejecutar el comando npm start.

Respecto al front, se debe ir a la carpeta front del proyecto, estando alli se ejecuta el comando npm install y finalmente npm start.

```

## Desiciones de Diseño 📖

1. Se determino el uso del preprocesador de css (sass), ya que favorece el mantenimiento, reutilización y la organización de las hojas de estilo.
2. Se usan hojas de estilo especificas para cada componente, con el fin de facilitar el mantenimiento y entendimiento de la aplicación.
3. Se hace uso de Bootstrap, debido a su amplio gabinete de opciones frente a los elementos esenciales para la creación de una aplicación y a su vez favorecer la visualización en otros dispositivos a los cuales pueda acceder el usuario final (responsive), lo cual es un hito importante a la hora de hablar de usabilidad.
4. Se utiliza el conjunto de atributos aria para cumplir con las especificaciones de la w3c, lo cual habla directamente de la accesibilidad, con el fin de generar una aplicación al alcance de diferentes tipos de usuario.
5. Se determino el uso de la unidad de medida em, ya que al ser dinamica permite la adaptación del contenido según el dispositivo.
6. Se uso react-helmet con el fin de mejorar el seo de la aplicación, a través de etiquetas meta, con contenido enriquecido.
7. Se decidio estructurar la aplicación en división de componentes funcionales, con el fin de facilitar el mantenimiento y teniendo presente uno de los pilares de solid, el cual es la responsabilidad unica por componente.



---
⌨️ con ❤️ por [LizethPatino](https://github.com/LizethPatino) 😊
