import { Component, OnInit } from '@angular/core';
import {BicitallerModel, geometry} from '../../Models/bicitaller.model'
import{NgForm} from '@angular/forms'

import Swal from 'sweetalert2'
import {Observable} from 'rxjs';

import {BicitalleresService} from '../../services/bicitalleres.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bicitaller',
  templateUrl: './bicitaller.component.html',
  styleUrls: ['./bicitaller.component.css']
})
export class BicitallerComponent implements OnInit {

  bicitaller: BicitallerModel= new BicitallerModel();

  constructor(private bicitalleresService:BicitalleresService,
              private route:ActivatedRoute) { 



              }

  ngOnInit(){
    // this.bicitaller.geometry.coordinates.coordinates[0];
    // this.bicitaller.geometry.coordinates.coordinates[1];
    // this.bicitaller.properties.horarioDomingo;
    // this.bicitaller.properties.horarioSemana;
    // this.bicitaller.properties.referencia="";
    // this.bicitaller.properties.servicios;
    // this.bicitaller.properties.telefono;


    // const id = this.route.snapshot.paramMap.get('id');

    // if(id !== 'nuevo'){
    //   this.bicitalleresService.obtenerBicitallerPorId(id)
    //   .subscribe((resp:BicitallerModel)=>{
    //     this.bicitaller=resp;
    //     this.bicitaller.id=id;
    //   })
    // }

  }

  guardar(form:NgForm){

    if(form.invalid){
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text:'Guardando Info',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();

   let peticion:Observable<any>;


   peticion=this.bicitalleresService.crearBicitaller(this.bicitaller);

//     if(this.bicitaller.id){

// peticion=this.bicitalleresService.editarBicitaller(this.bicitaller);

//     }else {

//      peticion=this.bicitalleresService.crearBicitaller(this.bicitaller);

//     }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.bicitaller.properties.referencia,
        text: 'Se actualizó Correctamente',
        icon:'success'
      })
    })

  }

}
