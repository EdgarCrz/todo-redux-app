import { createAction, props } from '@ngrx/store';

// TODO: Lo que escribimos dentro de las comillas no es mas que una referencia de el nombre( ya sea del componente donde lo usaremos o lo que vamos a modificar) y la accion que vamos realizar
export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>() // de esta manera nos pueden mandar un argumento(props) 
);
// Cambia el estado de completado: verdadero/falso
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>() // de esta manera nos pueden mandar un argumento(props) 
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto:string }>() // de esta manera nos pueden mandar un argumento(props) 
);

export const borrar = createAction(
    '[TODO] borrar Todo',
    props<{ id: number}>() // de esta manera nos pueden mandar un argumento(props) 
);

export const borrarCompletados = createAction('[TODO] borrar Completados');

export const toggleAll = createAction(
    '[TODO] Cambiar Todos',
    props<{ completado: boolean}>() // de esta manera nos pueden mandar un argumento(props) 
);