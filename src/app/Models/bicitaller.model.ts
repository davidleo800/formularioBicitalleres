
// export class BicitallerModel{
//     id:string;
//     referencia:string;
//     horarioSemana:string;
//     horarioDomingo:string;
//     servicios:string;
//     telefono:string;
//     latitud:string;
//     longitud:string;
// constructor(){
// }
// }

export class BicitallerModel{
    geometry: geometry;
    properties: properties;
    type: string;
    constructor(){
        this.type = 'Feature';
    }
}

export class geometry {
    type: string;
    coordinates: [number, number];
    constructor(){
        this.type = 'Point';
        this.coordinates = [0, 0];
    }

}

export class properties {
    // id:string;
    referencia: string;
    horarioSemana: string;
    horarioDomingo: string;
    servicios: string;
    telefono: string;

}
