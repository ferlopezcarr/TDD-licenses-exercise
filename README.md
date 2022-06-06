# TDD-licences-exercise
CodelyTV - TDD in Typescript course: 01.Licenses Exercise

### 🛠 ¡A praticar! Ejercicio Inside-out

Te proponemos un ejercicio para practicar TDD 🙃

### 📝 Ejercicio

Las empresas quieren poder adquirir licencias de Codely para sus empleados.

Para ello tenemos que habilitar una funcionalidad para que puedan consultar el precio total a pagar en función del número de suscripciones que van a contratar.

El precio unitario de las suscripciones depende del volumen que adquieran:

| Range | Unit price |
| ----- | ---------- |
| 1-2 | 299 € |
| 3-10 | 239 € |
| 11-25 | 219 € |
| 26-50 | 199 € |
| 51+ | 149 € |

Por ejemplo, si la empresa quiere 3 licencias, el precio de cada una será 239€, por lo que el total será 717 €.

El objetivo es añadir este comportamiento al sistema utilizando TDD. Se espera que la solución sea una clase o método que resuelva el algoritmo. La idea es practicar el ciclo de TDD y las diferentes formas de encarar la solución: fake-it, obvious implementation y triangulación.

Si quieres ir un pasito más allá, puedes adelantarte al curso y llevarlo a un entorno más próximo al real como una API HTTP o una solución completa en la web, pero no algo imprescindible, ya que lo veremos más adelante.

### ⚙️ Configuración

Enlace al ejercicio 👉 Tiered pricing

El ejercicio, en la carpeta base tiene todo lo necesario para empezar el mismo. Si no está disponible un lenguaje que quieras utilizar, puedes utilizar directamente uno de nuestros skeletons en los diferentes lenguajes, que ya traen una librería de testing configurada. También puedes utilizar tu propio entorno si lo deseas, ya que en el ejercicio construimos una solución desde cero.

En el archivo README tienes las instrucciones para ejecutar los tests, que es todo lo que necesitas para poder ir haciendo el ejercicio.

### 🚀 Cómo publico mi solución

Si tienes intención de publicar la solución al final, lo mejor es empezar copiando la base dentro del directorio de soluciones. De esta forma podrás ir haciendo los commits que desees y hacernos una Pull Request al finalizar el ejercicio:

cp -fr base/typscript solutions/username_small-description


Para publicar la solución, simplemente haz una Pull Request a nuestro repositorio para que la incluyamos en el mismo.

Esta es una contribución que puede ayudar a otras personas a ver diferentes enfoques y que nos de pie a analizarlas en el futuro.

### ⚠️ Solución de problemas

Si te surge cualquier problema técnico a la hora de realizar este ejercicio, puedes abrir una issue en el repositorio de GitHub.

