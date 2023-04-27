export class AcercaDeMi {
    id?: number;
    img: String;
    titulo: String;
    descripcion: String;

    constructor(
        img: String,
        titulo: String,
        descripcion: String,)
        {
            this.img=img;
            this.titulo=titulo;
            this.descripcion=descripcion;
        }
}