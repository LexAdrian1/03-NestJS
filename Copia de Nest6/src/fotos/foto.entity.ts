import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_miranda_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    url: string;

    @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.fotos)
    usuarioId: UsuarioEntity;


}