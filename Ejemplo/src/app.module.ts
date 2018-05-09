import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";

@Module({
  imports: [],
  controllers: [AppController,UsuarioController, ParametrosController], // controladores
  components: [],
})
export class AppModule {}
