export class NuevoUsuario {
    nombre!: string;
    username!: string;
    password!: string;
    authorities!: string[];

    constructor(nombre: string, nombreUsuario: string, password: string){
        this.nombre = nombre;
        this.username = nombreUsuario;
        this.password = password;
    }
}
