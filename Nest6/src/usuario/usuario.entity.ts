import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../fotos/foto.entity";

@Entity('web_miranda_usuario')
export class  UsuarioEntity {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column('text')
    nombre: string;

    @OneToMany(type => FotoEntity, fotoEntity => fotoEntity.usuarioId)
    fotos: FotoEntity[];

}