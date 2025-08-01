<h1 align=center > Módulo 4 </h1>

### Aprendizaje esperado:
Utilizar estructuras de tipo arreglo y sentencias iterativas para el control del flujo de un algoritmo que resuelve un problema simple acorde al lenguaje Javascript

## Actividad 5

### Problema 1
Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n

#### Solución
Se crea la función `funcionSumatoria()` que recibe un número `n`, mayor que 0 y menor que 100, y retorna la sumatoria de 1 hasta n.

````
n = 60
La suma de los números es 1830
````

### Problema 2
Construya una función que imprima si un número es primo o no. Los números primos son aquellos que son divisibles solo por 1 y por sí mismos.

#### Solución
Se crea la función `funcionPrimo()` que recibe un número `n` y retorna si el número es primo o no.

````
n = 146783
El número 146783 es un número primo
````
### Problema 3
Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1

#### Solución
Se crea la función `cuentaRegresiva()` que recibe un número `n`, mayor que 0 y menor que 100, retorna un arreglo que cuenta desde n hasta 1.

````
n = 9
9, 8, 7, 6, 5, 4, 3, 2, 1
````

### Problema 4
Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango.

#### Solución
Se crea la función `sumatoriaPares()` que recibe un número `n`, mayor que 10 y menor que 1000, y que retorna la sumatoria de los números pares contenidos en el rango (> 10 y < 1000)

````
n = 57
La sumatoria de los números pares es 782
````
### Problema 5
Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12.

#### Solución
Se crea la función `tablaMultiplicar()` que recibe un número `n` y retorna la tabla de multiplicar de `n` desde 1 hasta 12.

````
n = 12

12 x 1 = 12

12 x 2 = 24

12 x 3 = 36

12 x 4 = 48

12 x 5 = 60

12 x 6 = 72

12 x 7 = 84

12 x 8 = 96

12 x 9 = 108

12 x 10 = 120

12 x 11 = 132

12 x 12 = 144

````

## Actividad 4

### Problema 1
Crear una función que dado un número n cree un arreglo de largo n, donde en cada posición del arreglo este el doble del anterior. Nota: el primer elemento del arreglo es 1

#### Solución
Se crea la función `crearArreglo()` que recibe un número `n`y retorna un arreglo de longitud `n`y dónde cada número es el doble del anterior.

````
n = 4
[1,2,4,8]
````

### Problema 2
Crear una función que dado un arreglo de números de largo 10, permita obtener el mayor número contenido en el arreglo.

#### Solución
Se crea la función `numeroMayor()` que recibe 10 números separados por comas y retorna el número mayor.

````
arreglo = [100,33,44,6,2,45,145,6,9,1]
El número mayor es 145
````

### Problema 3
Dado un arreglo de strings que contiene los días de la semana, cree una función que le permita obtener un día en particular si se recibe su número correspondiente. Ej: 1 = Lunes , 7 = Domingo.

#### Solución
Se crea la función `diaDeLaSemana()` que recibe un número del 1 al 7 y retorna el día de la semana correspondiente.

````
número = 3
El número 3 corresponde al día Miércoles
````

### Problema 4
Crear una función que le permita buscar un elemento contenido en el arreglo. Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100.

#### Solución
Se crea la función `buscarElemento()` que recibe un arreglo y el número que se busca, retornando si el número se encuentra o no en dicho arreglo y si lo está, en que posición se encuentra.

````
arreglo = [1,22,54,15,67]
elemento = 15
El número 15 se encuentra en la posición 3
````

### Problema 5
Crear un programa que dado un arreglo de números desordenados los ordene ascendentemente.

#### Solución
Se crea la función `ordenarArreglo()` que recibe un arreglo de números y retorna el arreglo con los números ordenados de manera ascendente.

````
arreglo = [9,4,99,1,3]
[1, 3, 4, 9, 99]
````
----

#### Creado por
<p align="center"> 
  <a href="https://github.com/CaroHernz">Carolina Hernández</a>
</p>
