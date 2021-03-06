import {Injectable} from "@nestjs/common";

@Injectable()
export class UsuarioService  {
    usuarios: Usuario[] = [];
    crearUsuario(usuario:Usuario): Usuario[] {
        this.usuarios.push(usuario);
        return this.usuarios
    }
    mostrarUsuario(): Usuario[] {
        return this.usuarios
    }
}

export interface Usuario {
    nombre: String;
    apellido: String;
    edad: number;
}