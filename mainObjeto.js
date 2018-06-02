
var auto = {
    color: 'rojo',
    marca: 'toyota',
    modelo: 'yaris',
    motor:{
        cc: "1.6",
        combustible: "bencina"
    },
    puertas: 4,
    anio: 2018,
    transision: "mecanica",
    permisoCirculacion: true,
    tipo: "sedan",
    encendido: false,
    encender: function(){
        this.encendido = true;
    },
    frenar: function(){
        return "Frena kl";
    }
}

console.log(auto);
console.log(auto.marca);