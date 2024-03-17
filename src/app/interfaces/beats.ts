
//interfaz modelo para beats
export interface Beats{
    nombreBeat: string,
    bpm: number,
    typeBeat: string,
    mood:string,
    likes?: number,
    escala: string,
    url: string
}