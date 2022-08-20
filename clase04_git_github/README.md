#SKIL FACTORY - AVALITH
------------------------------
## :book:Clase 4 - 15-07
[youtube.com/watch?v=7WMTkra6xKg&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=4](https://www.youtube.com/watch?v=7WMTkra6xKg&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=4)

<section class="theme-guide">
  <h3 class="title-theme">Temas:</h3>
  <ul>
    <li><span>Git</span></li>
    <li><span>Configuración de credenciales de Git</span></li>
    <li><span>Secuencias sugeridas</span></li>
    <li><span>Buenas prácticas para commits</span></li>
  </ul>
</section>
<div class="line"></div>

<!-- ********************************* Main ********************************* -->
<section class="topics-container">
  <h3 class="title-topics">
    Git
  </h3>
  <ul class="ul-topics">
    <li>
      <span>
        <a href="https://git-scm.com/" class="link-definition" target="_blank">Git</a> es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.
      </span>
    </li>
    <li>
      <span>Es necesario configurar las credenciales de forma inicial para que Git pueda hacer login</span>
      <div class="cmds-git">
        <p>git config /-global user.name [your_name]</p>
        <p>git config /-global user.email [your_email]</p>
      </div>
    </li>
    <li>
      <span>Comandos esenciales</span>
      <div class="cmds-git">
        <p>git init<span> - Sirve para iniciar un nuevo repositorio en local</span></p>
        <p>git status<span> - Sirve para controlar el estado de nuestro repositorio</span></p>
        <p>git add<span> - Sirve para agregar cambios a nuestro staging</span></p>
        <p>git checkout [branch]<span> - Sirve para movernos de una rama a otra</span></p>
        <p>git commit -m [message]<span> - Sirve para escribir un mensaje en el cambio que queremos versionar</span></p>
        <p>git push [main]<span> - Sirve para enviar los cambios desde el repo local al repo remoto</span></p>
        <p>git remote update origin --prune<span> - Sirve para traer todas las ramas remotas hacia el repositorio local</span></p>
        <p>git branch<span> - Sirve para ver las ramas disponibles en el repositorio</span></p>
        <p>git remote -v<span> - Sirve para ver la dirección del repositorio remoto vinculado</span></p>
        <p>git remote add origin [url]<span> - Sirve para vincular el repo local a un repo remoto</span></p>
        <p>git clone [url]<span> - Sirve para clonar un repositorio remoto a nuestro equipo</span></p>
      </div>          
    </li>
    <li>
      <span>Secuencias sugeridas</span>
      <div class="cmds-git">
        <p>git init<span> - Creo el repositorio</span></p>
        <p><span>Voy a GitHub / GitLab y me creo un repositorio remoto</span></p>
        <p>git remote add origin [url]<span> - Agrego la URL del repositorio remoto</span></p>
        <p>git remote -v<span> - Veo que se haya creado la referencia remota para mi repo local</span></p>
      </div>
    </li>
    <li>
      <span>Buenas prácticas para commits</span>
      <div class="cmds-git">
        <p>Si querés agregar iconos en los mensajes de tus commits, esto puede servirte:</p>
        <p><span>" <a href="https://gist.github.com/parmentf/035de27d6ed1dce0b36a" class="link-definition" target="_blank">https://gist.github.com/parmentf/035de27d6ed1dce0b36a</a> "</span></p>
        <img class="ex1-img" src="../clase04_git_github/img/ex1.jpg" alt="Imagen de Github">
        <img class="ex2-img" src="../clase04_git_github/img/ex2.jpg" alt="Imagen de Github">
        <p>Buenos consejos... de buenas prácticas:</p>
        <p>Midudev: <span>" <a href="https://midu.dev/buenas-practicas-escribir-commits-git/" class="link-definition" target="_blank">midu.dev/buenas-practicas-escribir-commits-git/</a> "</span></p>
        <p>Códigofacilito: <span>" <a href="https://codigofacilito.com/articulos/buenas-practicas-en-commits-de-git" class="link-definition" target="_blank">codigofacilito.com/articulos/buenas-practicas-en-commits-de-git</a> "</span></p>
        <p>Medium: <span>" <a href="https://medium.com/@jmz12/buenas-pr%C3%A1cticas-para-commits-5eb4c86b9a47" class="link-definition" target="_blank">medium.com/@jmz12/buenas-pr%C3%A1cticas-para-commits-5eb4c86b9a47</a> "</span></p>
      </div>
    </li>
    <li>
      <span>Otros comandos</span>
      <div class="cmds-git">
        <p>git pull origin [branch]<span> - Sirve para traer la información desde una determinada rama</span></p>
        <p>git merge<span> - Sirve para combinar los cambios entre dos ramas</span></p>
        <p><span>Hacer merge entre dos ramas puede generar conflictos que debemos resolver para concretar la fusión</span></p>
        <p>Así se vé un "merge conflict"</p>
        <img class="ex2-img" src="../clase04_git_github/img/ex3.jpg" alt="Imagen de Github">
      </div>
    </li>
  </ul>
</section>

__Repositorio :__
[github.com/saveasfabri/react_sf_avalith/tree/main/clase04_git_github](https://github.com/saveasfabri/react_sf_avalith/tree/main/clase04_git_github)