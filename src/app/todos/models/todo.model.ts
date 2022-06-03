export class Todo{
    public id!: number; 
    public texto!: string; 
    public completado!: boolean; 

    constructor(texto:string){
        this.texto = texto
        this.id = Math.random()// de esta manera podemos simular un id, lo que nos devuelve es algo similar a esto 1652741124044
        this.completado = false;
    }
}