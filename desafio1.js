class Persona{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`);
    }
    getBookNames(){
        const nombres = []
        for (const libro of this.libros){
            nombres.push(libro.nombre)
        }
        console.log(nombres);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }
    
    addBook(libro){
        this.libros.push(libro);
        console.log(this.libros);
    }
}

const usuario1 = new Persona ('Gino', 'Crovella', 
    [
        {nombre: 'Cien años de soledad',
        autor: 'Gabriel García Márquez'},

        {nombre: 'El señor de los anillos',
        autor:'JRR Tolkien'},

        {nombre: 'Un mundo feliz',
        autor:'Aldous Huxley'}
    ],
    ['gato', 'perro', 'pajaro']
    )

usuario1.getFullName();
usuario1.countMascotas();
usuario1.getBookNames();
usuario1.addMascota('conejo');
usuario1.addBook({nombre:'Harry Potter', autor:'Messi'})
