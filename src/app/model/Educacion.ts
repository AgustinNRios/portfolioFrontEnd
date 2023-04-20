export class Educacion {
    id?: Number;
    img: String;
    institucion: String;
    titulo: String;
    estado: String;
    descripcion: String;

    constructor(
        img: String,
        institucion: String,
        titulo: String,
        estado: String,
        descripcion: String,)
        {
            this.img=img;
            this.institucion=institucion;
            this.titulo=titulo;
            this.estado=estado;
            this.descripcion=descripcion;
        }
}