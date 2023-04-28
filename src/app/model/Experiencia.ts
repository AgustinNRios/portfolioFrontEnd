export class Experiencia {
    id?: number;
    img: String;
    empresa: String;
    cargo: String;
    periodo: String;
    descripcion: String;

    constructor(
        img: String,
        empresa: String,
        cargo: String,
        periodo: String,
        descripcion: String,)
        {
            this.img=img;
            this.empresa=empresa;
            this.cargo=cargo;
            this.periodo=periodo;
            this.descripcion=descripcion;
        }
}