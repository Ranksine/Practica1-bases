import { MenuItem } from './models/menu-item.model';
import { Tarea } from './models/tarea.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit{
  // public menuItems: {item: string, active: boolean}[] = [];
  menuItems: MenuItem[] = [];
  // public tareas: {titulo: string, description:string, status:string}[] = [];
  tareas: Tarea[] = [];
  newTarea:Tarea={
    titulo:'perrin',
    descripcion:'',
    status:'Pendiente'
  };
  

  constructor() {
    // let item1:MenuItem = {item:"", active:false};
    // this.menuItems.push(item1);
    this.menuItems.push({item: 'Nueva tarea', active: false});
    this.menuItems.push({item: 'Mis tareas', active: true});
  }

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    tareasJson !=null ? this.tareas = JSON.parse(tareasJson) : null;
  }

  // public setMenuItemAsActive(miPichula: {item: string, active: boolean}): void {
  //   for (let menuItem of this.menuItems) {
  //     if(menuItem == miPichula){ //miPichula es el parametro de item que recibe el metodo
  //       menuItem.active = true;
  //     }
  //     else{
  //       menuItem.active = false;
  //     }
  //   }
  // }
  public setMenuItemAsActive(miPichula: number): void {
    // for (let x =0 ; x<this.menuItems.length; x++) {
    //   if(x == miPichula){ //miPichula es el parametro de item que recibe el metodo
    //     this.menuItems[x].active = true;
    //   }
    //   else{
    //     this.menuItems[x].active = false;
    //   }
    // }
    for (let x =0 ; x<this.menuItems.length; x++) {
      if(x == miPichula){ //miPichula es el parametro de item que recibe el metodo
        this.menuItems[x].active = true;
        continue;
      }
        this.menuItems[x].active = false;
      
    }
  }

  public agregarTarea(titulo: string, descipcion:string):void {
    this.newTarea.titulo=titulo;
    this.newTarea.descripcion=descipcion;
    this.tareas.push(this.newTarea);

    this.newTarea={
      titulo:'',
      descripcion:'',
      status:'Pendiente'
    };

    this.setMenuItemAsActive(1);

    this.almacenarDatos();

  }

  public cambiarStatus(index : number, status : string):void {
    this.tareas[index].status=status;
    this.almacenarDatos();
  }

  private almacenarDatos() : void {
    localStorage.setItem("tareas",JSON.stringify(this.tareas));
  }

}
