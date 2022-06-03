import { createAction, props } from '@ngrx/store';
export type filtrosValidos = 'todos' | 'completados' | 'pendientes'; // como crear un tipado

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: filtrosValidos }>() // solo aceptara uno de los filtros establecidos en el tipado 
);

 
