export class NuevoUsuario {
    nombre!: string;
    apellido!: string;
    username!: string;
    password!: string;
    authorities!: string[];

    constructor(nombre: string, apellido: string, nombreUsuario: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = nombreUsuario;
        this.password = password;
    }
}
