var chai = require('chai');
var assert = chai.assert;
var Cuenta = require('../index.js');

describe('Parkner Test', function(){
    
    var problema = [ 'aba', 'aab', 'ccc', 'ddc', 'dcd', 'baa', 'dds', 'sdd', 'dcd', 'xyz' ];
    var solucion = [ 3, 3, 2, 1, 1 ];

    it('should pass test', function(){
        var resultado = Cuenta(problema);
        assert.deepEqual(solucion, resultado, 'Error: Los resultados no son iguales!');
    });

});
