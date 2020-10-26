
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
    constructor(
        type="FeatureCollection"
    ){};

}

export class geometry {
    coordinates: coordinates;
    type: string;

}

export class coordinates {
    coordinates: [string,string];
}

export class properties {
    // id:string;
    referencia:string;
    horarioSemana:string;
    horarioDomingo:string;
    servicios:string;
    telefono:string;
}