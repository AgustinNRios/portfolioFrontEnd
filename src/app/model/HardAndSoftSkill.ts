export class HardAndSoftSkill {
    id?: number;
    img: String;
    area: String;
    nombre: String;
    nivel: number;
    categoria: String;

        constructor(
            img: String,
            area: String,
            nombre: String,
            nivel: number,
            categoria: String,)  
        {
        this.img = img;
        this.area = area;
        this.nombre = nombre;
        this.nivel = nivel;
        this.categoria = categoria; 
        }
}