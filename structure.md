
Es recomendable que usemos un modulo en pages
ng g m pages
- Normalmente crea una carpeta con el mismo nombre, pero si la carpeta ya existe entonces pone el archivo dentro de la carpeta existente

--- 
MODULOS
- Todos los componentes del mismo modulo pueden acceder a sus otros componentes
En el modulo de pages le agregamos el componente que queremos que vaya ahi en "declarations"

En los "imports" van los modulos que queremos agregar

---
Creamos layouts para

- De esta manera agregamos un modulo que se importa directamente al modulo app
ng g module layout --module app

- Como ahora tenemos un layout entonces tenemos que decirle al routing que existe un componente el cual tiene sus hijos




RouterModule? porque se le agrega a layouts