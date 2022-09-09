// Funcionabilidades asincrónicas

// setTimeout(() => {
   // acciones 
// }, 2000);

// setInterval(() => {
//     console.log('Hola mundo');
// }, 2000);

// No bloquea el hilo de numeros.
// console.log('1');
// console.log('2');
//                                 setTimeout(() => {
//                                     console.log('3');
//                                 }, 1000);
// console.log('4');



// Modulo nativo file system: fs
// SOLO ES POSIBLE EN NODE.JS EN NUESTRO LOCAL
// Funciones sincronicas a utilizar, bloqueantes
    // readFileSync  LEER UN ARCHIVO
    // writeFileSync ESCRIBIR UN ARCHIVO
    // appendFileSync AGREGAR TEXTO A UN ARCHIVO

const fs = require('fs')

// console.log(fs);

// fs.writeFileSync('./data.txt', 'aca va lo que quiero escribir del texto \n', 'utf-8')  // esto es sincronico

// fs.appendFileSync('./data.txt', 'aca va el contenido agregado y si no existe lo crea \n', 'utf-8')

// try {
//     // data
//     const data = fs.readFileSync('data.txt', 'utf8') 
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// primer parametro es un string con la ruta del archivo que queremos leer
// segundo parametro indica el tipo de caracteres

// Borrar archivo
// fs.unlinkSync('./data.txt')

// Manejo de errores con TRY - CATCH


// FS con CALLBACKS - se usan las mismas funciones pero sin la palabra Sync
// Funcionalidades de fs asincronicas con callbacks

// fs.writeFile('./data.txt', 'contenido nuevo \n', 'utf-8', (err) => {
//     if (err) {
//         console.log(err); // va solo el de error porque estoy creando un archivo
//     } else {
//         console.log('archivo creado') 
//     }
// })

// fs.appendFile('./data.txt', 'agrego contenido append', 'utf-8' , err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('contenido agregado');
//     }
// })

// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err); // si da mal entra acá
//     } else {
//         console.log(data); // si esta todo bien entra acá
//     }
// })
// // tercer parametro para error, y donde esta el archivo

// fs.unlink('./data.txt', err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('se borro el archivo');
//     }
// })


// Crear carpeta
// fs.mkdir('./acavadata', err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('carpeta creada');
//     }
// })


// Ver contenido de una carpeta
// fs.readdir('./acavadata', (err, contenidoArchivo) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(contenidoArchivo);
//     }
// })



// FS: modo asincronico via PROMESAS

// Leer un archivo  -  Manera vieja
// fs.promises.readFile('./data.txt', 'utf-8')
// .then(contenidoArchivo =>{
//     console.log(contenidoArchivo);
// })
// .catch(err => console.log(err)
// );

// Leer un archivo - Manera nueva 
const leerArchivo = async () => {
    // try {
    //     await fs.promises.writeFile('./data.txt', 'Creando contenido', 'utf-8')
    //     console.log('archivo creado');
    // } catch (error) {
    //     console.log(error);
    // };

    // try {
    //     await fs.promises.appendFile('./data.txt', 'Agregando contenido con append', 'utf-8')
    //     console.log('archivo agregado con append');
    // } catch (error) {
    //     console.log(error);
    // }
    
    try {
        await fs.promises.rename('./data.txt', './newname.txt')
        console.log('archivo renombrado');
    } catch (error) {
        console.log(error);
    }
}

//     try {
//         const contenidoArchivo = await fs.promises.readFile('./data.txt', 'utf-8')
//         console.log(JSON.parse(contenidoArchivo));
//     } catch (error) {
//         console.log(error);
//     }
// } 

leerArchivo();
