import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions'
import { Store, on } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef; // Referencia a un elemento fisico de el html

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  // Le indicamos su tipado "AppState" en el cual tiene los diferentes tipos de datos almacenados
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todo.completado); 
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
// 
    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
      
    })

  }
  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select(); //o focus

    }, 1);

  }
  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {return}
    if (this.txtInput.value === this.todo.texto) {return}
    this.store.dispatch(actions.editar({id:this.todo.id, texto:this.txtInput.value}))
    // this.store.complete 
  }

  borrarTodo(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

  // terminarTodo() {
  //   console.log(this.chkCompletado.value);
  //   this.todo.completado === true ? this.todo.completado = false : this.todo.completado = true;
  // }

}
