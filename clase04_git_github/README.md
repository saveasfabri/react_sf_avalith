#SKIL FACTORY - AVALITH
------------------------------
## :book:Clase 4 - 15-07
[youtube.com/watch?v=7WMTkra6xKg&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=4](https://www.youtube.com/watch?v=7WMTkra6xKg&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=4)

### :floppy_disk: Git

##### Comandos :

`git init` -- Nuevo repositorio en local.

`git status` -- Ver estado de repositorio local.

`git add ` -- Sube a staging un cambio.

`git add .`-- Sube a staging todos los cambios

`git add <name>`-- Sube a staging un archivo con ese nombre

`git commit -m "mensaje"` -- Versiona cambio con Mensaje.

`git push ` -- Sube los cambios del repositorio local.

`git push -u origin "branch"` -- Sube los cambios en una rama particular del remoto.

`git remote update origin --prune ` -- Trae todas las ramas remotas al local.

`git checkout <branch>` -- Pasar a otra rama.

`git checkout -b <branch>` -- Crear una nueva rama y y se posiciona en ella.

`git branch` -- Ver ramas del repositorio.

`git branch nombre-rama` -- Crea rama.

`git remote -v ` -- Muestra dirección del repositorio remoto.

`git remote add origin [url]` -- Vincula repositorio local a repositorio remoto.

`git clone [url]` -- Clona un repositorio remoto al local.

---

### :floppy_disk: Github

##### Configuración de credenciales para que git pueda hacer login:
`git cofig --global user.name "mi nombre"` -- Configura el nombre del usuario.

`git cofig --global user.email "example@example.com"` -- Configura el mail del usuario.

`git config --get user.name` -- Muestra nombre de usuario configurado.

`git config --get user.email` -- Muestra mail de usuario configurado.

---
#### Inicio genérico:

`git init` -- Crea el repositorio

Ingresar a GitHub y crear repositorio remoto.

`git remote add origin [url]` -- Agrega la URL del repositorio remoto.

`git remote -v` -- Controla referencia remota para repositorio local.

`git status` -- Muestra estado del repositorio y rama posicionada.

`git add .` -- Agrega todos los cambios.

`git commit -m "mensaje" ` -- Crea commit con mensaje.

`git push origin [branch]` -- Publica nueva version de repositorio local en remoto.

---

#### :ok_hand: Buenas practicas de commit:

[Midu](https://midu.dev/buenas-practicas-escribir-commits-git/)

[Código facilito](https://codigofacilito.com/articulos/buenas-practicas-eb-commits-de-git)

#### :+1: Íconos con Mark Up:

[Medium - Recomendacion de íconos en commit](https://medium.com/@jmz12/buenas-pr%C3%A1cticas-para-commits-5eb4c86b9a47)

Si queres agregar iconos en los commits usando Mark Up

[Webfx - Enlace para íconos](https://www.webfx.com/tools/emoji-cheat-sheet/)

---
#### Otros comandos:

`git pull origin [branch]` -- Trae información de rama existente en un repositorio y la baja a local. ( [branch] Es la rama que se desea bajar al local.

`git merge` -- Combina los cambios de dos ramas. 

---

** Info adaptada de repo https://github.com/eugenia1984/Avalith-React/blob/main/clase06/README.md?plain=1 