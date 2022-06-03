import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const initialState:actions.filtrosValidos = 'todos';

export const filtroReducer = createReducer<actions.filtrosValidos,Action>(
initialState,
on(actions.setFiltro, (state, {filtro}) => filtro),  // debido a que string es un primitivo quiere decir que no hay riezgo de que mute el estado ya que los primitivos no son pasados por referencia

);


