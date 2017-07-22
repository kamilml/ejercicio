/*
* Prueba de programación de Parkner
* Debes de llenar de abajo
* y pasar los test en test.js
*
*/

/*
* El problema:
* Quiero saber cuantas veces ocurre la misma combinacion de letra en un string dentro de un array.
* Ejemplo: Array -> [ 'ab', 'ba' ].
* En este caso la combinacion 'a' y 'b' ocurre 2 veces en 2 strings diferentes.
* Debes regresar un Array, en order de mayor ocurrencia a menor.
* En este caso regresaria -> [ 2 ];
* 
* Entra /test/test.js si quieres ver el valor de diccionario.
*
* Cualquier pregunta, mandar un email a: johnnie.tirado@parkner.com.pe
*
*/

var Cuenta = function (diccionario) {
    let array = []
    let aEvaluar
    let contador
    let match
    function permutar () {
        aEvaluar = diccionario.splice(0,1)[0].split('')
        contador = 1
        diccionario.map((v,k) => {
            match = true
            v = v.split('')
            aEvaluar.map(v2 => {
                if (v.indexOf(v2) < 0) match = false
                else v.splice(v.indexOf(v2),1)
            })
            if (match) {
                contador++
                diccionario.splice(k,1)
            }
        })
        array.push(contador)
        if (diccionario.length) return permutar()
        else return array.sort((a,b) => a-b).reverse()
    }
    return permutar()
}

module.exports = Cuenta