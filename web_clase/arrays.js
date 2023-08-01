/*let fruta1 = "fresa"
let fruta2 = "Mango"
let fruta3 = "Banano"
//crear array 0     1     2
let frutas = ["fresa", "mango", "Banano"];
//Mostrar los datos del array
document.write("frutas: " +frutas[2]);*/

//Crear objeto
/*let verduras = {
    "v1":"Pepino",
    "v2":"Cebolla",
    v3:"Ajo",
    23:"Zanahoria"
}
//Mostrar los datos ddel objeto 
document.write("verduras: " + verduras.v2)*/

//Crear arreglo
/*let sancocho = [
    "papa",
    7363,
    false,
    function saludo(){
        return "Hola desde la función";
    },
    ["maggi",98989,true],
    {
        "s1":"yuca",
        "s2":"pollo",
    }
];
//Mostrar los datos
document.write("dato 1: "+ sancocho[3]() + "<br>");
document.write("dato 2: "+ sancocho[4][1] + "<br>");
document.write("dato 3: "+ sancocho[5].s2 + "<br>");*/

/*let sancocho = {
    "s1": "papa",
    "s2": 3432,
    "s3": true,
     "s4":
     function sal(){
         return "Hola desde la función";
     },
     "s5": ["yuca","cerdo","habichuela"],
     "s6": {
        "h1": "cilantro",
        "h2": "cebolla",
        "h3": 909
     }
}
//Mostrar datos
//Objeto
document.write("dato 1: " + sancocho[6].h2)
//Arreglos
document.write("dato 2: " + sancocho.s5[2])*/


//array vacio
/*let frutas = [];
//Estatica
//Frutas[0] = "mango";
//Frutas[1] = "piña";
//dinamica;
let cantidad = Number(prompt("¿Cantidad de frutas a comprar?"));
for( let x = 0; x < cantidad; x++){
    frutas[x] = prompt("Digite el nombre de la fruta" + (x+1));
}
//Mostrar datos
for( let i = 0; i < frutas.length; i++){
    document.write("fruta:" +frutas[i] + "<br>")
}*/

//objeto_Ejercicio
/*let verduras = {
    "v1": "",
    "v2": "",
    "v3": "", 
}

let verduras2 = {}
//Estatica
 verduras.v1 = "Cebolla";
 verduras.v2 = "Tomate";

 verduras2.ver1 = "Ajo";
 verduras2.ver2 = "Zanahoria";
 for( let key in verduras){
    document.write("verduras: " +verduras2[key]+ "<br>")
 }*/

 //Llenar un objeto vacio con
 /*let empleados = {
    nombre : "",
    salario : "",
    profesion : "",
 }
 for(let key in empleados){
    empleados[key] = prompt("Digite "+key)
 }
 //Mostrar datos
 for( let k in empleados){
    document.write( k + ":" + empleados[k] + "<br>");
 }*/

 var compra = {
    "producto": [],
    "Cantidad": [],
    "Precio": [],
 }
var CantiPro = parseInt(prompt("¿Cuántos productos va a comprar?"))
for(var i = 0; i < CantiPro; i++){
    for(var pro in compra){
        compra[pro][i] = prompt("Digite " + pro + "#" + (i+1));
    }
    
}
//Mostrar datos
for(var j = 0; j < CantiPro; j++){
    for(var producto in compra){
        document.write(compra)
            document.write(producto + ":" + compra[producto][j] + "<br>");
        }
        document.write("---------------<br>");
    }




  
