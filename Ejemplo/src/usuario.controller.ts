//decorator
import {Get, Controller, Req, Res, HttpCode, Post} from '@nestjs/common';

@Controller('Usuario')
export class UsuarioController{
    usuario = {
        nombre:'Jorge',
        apellido: 'Carrillo',
        edad: 22
    };
    usuarios = [];
    @Get('mostrar')
    @HttpCode(202)
    mostrarUsuario(/*@Req () request, @Res () response*/) {
        return (this.usuario);

    }
    @Get('mostrarExpress')
    mostrarExpress(@Req () request, @Res () response) {
        return response.status(202).send(this.usuario);

    }
    @Post('crearUsuario')
    crearUsuario(@Req () request, @Res () response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad,
        };
        this.usuarios.push(nuevoUsuario);
        return response.status(200).send(this.usuario);

    }
}