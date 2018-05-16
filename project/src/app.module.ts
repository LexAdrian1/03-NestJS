import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuarioController";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";
import {UsuarioService} from "./usuario.service";

@Module({
  imports: [//OtrosModulos

  ],
    providers: [
        UsuarioService
    ],
  controllers: [//Controladores
      AppController,
      UsuarioController,
      ParametrosController
  ],
  components: [


  ],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LogMiddleware)
            .with(this.nombreAplicacion,1899)
            .forRoutes(UsuarioController,AppController,ParametrosController)//.apply(OtroMiddleware).forRoutes(Otrasrutas);
    }
}
