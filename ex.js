
//Ejercicio 1
console.log('Ejercicio 1');
var n = 5;
var arreglo = [];

for (let i = 1;i<n;i++){
    arreglo.push(i);
}
console.log(arreglo);

//Ejercicio 2
console.log('Ejercicio 2');
var n = 10;
var arreglo = [];

for (let i = 0;i<n;i++){
    if (i%2==0){
        arreglo.push(0)
    }else{
        arreglo.push(i)
    }
}
console.log(arreglo);

//Ejercicio 3
console.log('Ejercicio 3');
function getMax(x){
    var max = 0;
    for (let i = 0;i<x.length;i++){
        max = Math.max(max,x[i]);
    }
    return max;
}

var x = [10,24,36,7,98,11,14,20];
console.log(getMax(x));

//Ejercicio 4
console.log('Ejercicio 4');
function getPos(x){
    var pos = 0;
    var max = 0;
    for (let i = 0;i<x.length;i++){
        if (max<x[i]){
            pos = i;
            max = x[i];
        }
    }
    return pos;
}

var x = [10,24,36,7,98,11,14,20];
console.log(getMax(x),getPos(x));

//Ejercicio 5
console.log('Ejercicio 5');
function repeat(x,max){
    var r = 0;
    for (let i = 0;i<x.length;i++){
        if (max==x[i]){
            r++;
        }
    }
    return r;
}

var x = [10,24,36,7,98,11,14,20,98,14,10];
console.log(getMax(x),repeat(x,getMax(x)));

//Ejercicio 6
console.log('Ejercicio 6');
function sameArray(x,y){
    flag = true;
    if(x.length!=y.length){
        return 'Arrays distintos';
    }
    for(i=0;i<=x.length;i++){
        if (x[i]!=y[i]){
            flag =  false;
            return 'Arrays distintos';
        }
    }
    return 'Arrays iguales';
}

function longerArray(x,y){
    if(x.length>y.length){
        return x;
    }
    return y;
}

function letterCommon(x,y){
    var n = 0;
    for(i=0;i<=x.length;i++){
        if (x[i]!=y[i]){
            return n;
        }
        n++;
    }
    return n;
}

var x = ['a','l','f','a'];
var y = ['a','l','f','a','j','u','r'];
//var y = ['a','l','f','a'];
console.log(sameArray(x,y));
console.log(longerArray(x,y), 'es mas largo.');
console.log('Tienen',letterCommon(x,y),'letras en comun.');

//Ejercicio 7
console.log('Ejercicio 7');
function older(x,y){
    if (x[2]>y[2]){
        return x[0]
    }else{
        return y[0]
    }
}

function married(x){
    (x[4]) ? console.log(x[0],'esta casado') : console.log(x[0],'no esta casado');
}

function increaseSalary(x,y){
    var newSalary = x[3] + (y[3] * 0.125);
    console.log('El monto a cobrar sera:',newSalary.toFixed(2));
}

var datos1 = ['Fido','Gomez',26,15000.78,true];
var datos2 = ['Gervasio','Fernandez',32,28550,false]

console.log(older(datos1,datos2),'es mas viejo.');
married(datos1);
married(datos2);
increaseSalary(datos1, datos2);
