//Decorator
import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";
@Controller('Usuario')
export  class UsuarioController {
    usuario = {
        nombre:'Alexis',
        apellido:'Miranda',
        edad:28
    };
    usuarios = [];
    @Get('mostrar')
    @HttpCode(202)
    mostrarUsuario(@Req() request,@Res() response){
        return response.send(this.usuario);
    }
    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ) {
        return response
            .status(204)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request, @Res() response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        this.usuarios.push(nuevoUsuario);
        return response.status(201).send(nuevoUsuario);
    }
}




