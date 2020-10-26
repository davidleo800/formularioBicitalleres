import { Component, OnInit } from '@angular/core';

import {BicitalleresService} from '../../services/bicitalleres.service'
import { BicitallerModel } from 'src/app/Models/bicitaller.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bicitalleres',
  templateUrl: './bicitalleres.component.html',
  styleUrls: ['./bicitalleres.component.css']
})
export class BicitalleresComponent implements OnInit {

  bicitalleres: BicitallerModel[]=[];

  constructor(private bicitalleresService:BicitalleresService) { }

  ngOnInit() {
    this.bicitalleresService.obtenerBicitalleres()
    .subscribe(resp =>{
      console.log(resp);
      this.bicitalleres=resp;
    })
    
  }

  borrarBicitaller(bicitaller:BicitallerModel, i:number){

    Swal.fire({
      title:'Seguro que quiere borrar',
      text:'Esta seguro que quiere borrar',
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp =>{
      if(resp.value){
        this.bicitalleres.splice(i,1);
        // this.bicitalleresService.borrarBicitaller(bicitaller.properties.id).subscribe();
      }
    })

  }

}
