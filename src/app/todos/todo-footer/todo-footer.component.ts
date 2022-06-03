import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions'
import * as todoActions from '../../todos/todo.actions'
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos'
  filtros: actions.filtrosValidos[] = ['completados', 'pendientes','todos'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {
   }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro)
    this.store.subscribe(state =>{
      // console.log(state);
      const {filtro, todos} = state;
      this.filtroActual = filtro;

      this.pendientes = todos.filter(todo => !todo.completado).length
      
    })
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro: filtro})  ) // podemos obviar "filtro"
  }

  borrarCompletados(){
    this.store.dispatch(todoActions.borrarCompletados())
  }

}
