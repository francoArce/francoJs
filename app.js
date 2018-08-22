const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sit = os.platform();
let usuario = os.hostname();

let cpu_string = JSON.stringify(cpu);//string template
fs.appendFile('ArchivoStringTemplates.txt',`Información del CPU: ${cpu_string}`, function(error)
{
 if(error){
     console.log('ERROR!! al crear archivo');
 }
});

/*console.log(usuario);
console.log(sit);
console.log(cpu);
fs.appendFile('franco.txt','Información del CPU'+ JSON.stringify(cpu), function(error)
{
 if(error){
     console.log('ERROR!! al crear archivo');
 }
});
*/
