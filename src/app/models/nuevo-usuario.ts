export class NuevoUsuario {
    nombre!: string;
    username!: string;
    password!: string;
    authorities!: string[];

    constructor(nombreUsuario: string, password: string){
        this.username = nombreUsuario;
        this.password = password;
    }
}
