import {  ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

// Creamos una interface para nuestro state
// Aqui vamos a ir agregando los diferentes states de la aplicacion, en este caso solo tenemos uno que serian nuestros todos, pero si quiereramos administras mas informacion diferente  aqui podremos ir indicando como lucira esa informacion
export interface AppState{
    todos:Todo[],
    filtro: filtrosValidos 

}

// Este objeto contiene los reducer que nuestra aplicacion va a necesitar
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
     
}