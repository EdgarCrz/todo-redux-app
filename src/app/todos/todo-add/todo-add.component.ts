import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions  from '../todo.actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  //es para usar reactiveForms pero de manera individual, la otra manera es crear un group pero aqui
  //  no es necesario Realiza un seguimiento del valor y el estado de validación de un control de formulario individual.
  txtInput!: FormControl; 


  // Importamos nuestro store, que es de tipo "AppState" recordemos que "AppState" tendrá lo que sera todos los tipos de datos que almacenaremos en nuestro store 
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
   }

  ngOnInit(): void {
  }

  agregar(){
    // Store
    if (this.txtInput.invalid) { return; }
    
    
    this.store.dispatch(actions.crear({texto: this.txtInput.value})); // al disparar esta accion agregamos un todo a nuestro state
    this.txtInput.reset(); // de esta manera reseteamos el valor de unelemento de un reactive form 
    
  }

}
 