export class Educacion {
    id?: number;
    img: String;
    area: String;
    nombre: String;
    nivel: String;
    categoria: String;

        constructor(
            img: String,
            area: String,
            nombre: String,
            nivel: String,
            categoria: String,)  
        {
        this.img = img;
        this.area = area;
        this.nombre = nombre;
        this.nivel = nivel;
        this.categoria = categoria; 
        }
}