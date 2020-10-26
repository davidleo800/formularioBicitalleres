import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BicitallerModel } from '../Models/bicitaller.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BicitalleresService {
private url = 'https://gregario-ee3cf.firebaseio.com/bicitalleres/features';
  constructor(private http: HttpClient) { }


  crearBicitaller(bicitaller:BicitallerModel){
    console.log(bicitaller);
    return this.http.post(`${this.url}/bicitalleres.json`,bicitaller);
    // .pipe(
    //   map((resp:any)=>{
    //     console.log(resp);
    //     bicitaller.properties.referencia = resp.name;
    //     return bicitaller;
    //     console.log(resp);
    //     
    //   })
    // )
  }

  editarBicitaller(bicitaller:BicitallerModel){
    const bicitallerTemp={
      ...bicitaller
    };
    delete bicitallerTemp.properties;
    // return this.http.put(`${this.url}/bicitalleres/${bicitaller.properties.id}.json`,bicitallerTemp)
  }

  obtenerBicitalleres(){
    return this.http.get(`${this.url}/bicitalleres.json`)
    .pipe(
      map((resp:any)=>this.crearArreglo(resp)

      )
    )
  }

  obtenerBicitallerPorId(id:string){
    return this.http.get(`${this.url}/bicitalleres/${id}.json`)
  }

  private crearArreglo(bicitalleresObj:object){

    const bicitalleres: BicitallerModel[]=[];

    console.log(bicitalleresObj)

    if(bicitalleresObj ===null) {return [];}

    Object.keys(bicitalleresObj).forEach(key =>{
      const bicitaller: BicitallerModel= bicitalleresObj[key];
      // bicitaller.properties = key;

      bicitalleres.push(bicitaller);
    })
    return bicitalleres
  }

  borrarBicitaller(id:string){
    return this.http.delete(`${this.url}/bicitalleres/${id}.json`)
  }

}

