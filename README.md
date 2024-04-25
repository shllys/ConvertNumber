##Convertidor-Number
![Badge Terminado](https://img.shields.io/badge/STATUS-COMPLET-green)

#####Codigo de número Entero a Romano
Cree una función y en este un condicional en el que si el tipo número no es un número o si no es un entero, retornará 'Null'...
Se crea un array con los números romanos y estos se asignan a una variable, se crean otras variables:

`let diritos = String(numero).split('');`
*Es para que el número se vuelva un string y este devuelva un nuevo array*

`let romano = '';`
*Una variable tipo string que comenzara estando vacía, allí se le agregara el código después*

`let i = 3;`
*Y una variable 'i' que empiece por '3' para después con un siclo while ir reduciendo el valor de esta variable*

```javascript
while (i--) {
    romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
}
```
*Se le asigna a la variable romano el array ROMANOS se transforma a un número entero con parseInt o el símbolo '+' a dígitos que estos abceden con pop al último carácter y lo retorna, más la suma de la variable 'i' multiplicado por 10 o si no se encuentra se dejará una cadena vacía y luego se concatena a romano*

Por último se retorna el array y se unen con join para que todos los dígitos se unan por una cadena vacía y se le suma 1 y juntamos todo con la letra M y al final lo concatenamos a romano.
Ya solo queda llamar la función y colocar el número a convertir.

#####Codigo de número Romano a Entero
La función utiliza un objeto llamado ROMANOS para recorrer cada símbolo romano a su valor numérico correspondiente.

```javascript
 while (i < romano.length) {
    if (i + 1 < romano.length && ROMANOS[romano[i]] < ROMANOS[romano[i + 1]]) {
        entero += ROMANOS[romano[i + 1]] - ROMANOS[romano[i]];
        i += 2;
    } else {
        entero += ROMANOS[romano[i]];
        i++;
    }
 }
```
*La función utiliza un bucle while para recorrer el string de entrada y sumar los valores numéricos de los símbolos romanos. Dentro del bucle, la función utiliza una variable 'i' para mantener un índice del string de entrada.*::
