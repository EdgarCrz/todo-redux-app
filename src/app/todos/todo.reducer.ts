import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';


// Este es nuestro state que inicialmente tiene un todo "Salvar al mundo"
export const todoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Iron man'),
  new Todo('Robar escudo del capitan america'),
]; // tenemos nuestro arreglo de todos vacio en su estado inicial


// anteponer "_" antes de el nombre de una variable indica que es privada
// FIXME:En redux no se recomienda hacer uso de push directamente al state ya que podriamos mutarlo
// TODO: En la version de el curso utilizan function  en la version mas actual lo utilizan de esta manera
export const todoReducer = createReducer(
  todoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]), // extrae cada uno de los items y regresalos de manera independiente, spread lo que realiza es generar una copia de state y lo siguiente es agregarle un nuevo valor a esa copia



  on(actions.toggle, (state, { id }) => {
    // map: Crea un NUEVO array con el resultado de la llamada a la funcion indicada aplicados a cada uno de sus elementos.
    /* Usando map crearemos un nuevo array en el cual modificaremos el elemento "todo" que coincida
 con el id que nos estan mandando como props, el coincidente modificaremos su propiedad "completado"
  por el valor contrario true/false */
    return state.map(todo => {

      // con esto logramos que la funcion de cambiar completado solo se ejecute en el todo que coincida con el id
      if (todo.id === id) {

        // Regresamos un NUEVO objeto NOTESE: que no estamos mutanto los elementos ya que hacer eso seria fatal, siempre hay que devolver 
        return { // Como vamos a repetir esto por cada elemento de nuestro array de todos, tenemos que usar el operador spread para generar una COPIA y modificar solo "completado" de esta manera conseguiremos crear el NUEVO todo y en ese nuevo modificar "completado"
          ...todo, // Se leé: extrae todas las propiedades y "completado" lo modificamos de la siguiente manera
          completado: !todo.completado
        }

      } else {
        return todo;
      }

    })
  }), // extrae cada uno de los items y regresalos de manera independiente, spread lo que realiza es generar una copia de state y lo siguiente es agregarle un nuevo valor a esa copia

  on(actions.editar, (state, { id, texto }) => {

    return state.map(todo => {

      if (todo.id === id) {

        return {
          ...todo,
          texto: texto
        }

      } else {
        return todo;
      }

    })
  }),

  on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)), // filter devuelve un un nuevo array con los elementos que cumplan la condicion, en este caso devolvemos todos los elementos que sean diferentes al id que nos mandan

  on(actions.toggleAll, (state, { completado }) =>  state.map((todo) => {

      return {
        ...todo,
        completado: completado
      }
    })



  ), // filter devuelve un un nuevo array con los elementos que cumplan la condicion, en este caso devolvemos todos los elementos que sean diferentes al id que nos mandan

  on(actions.borrarCompletados, (state) => state.filter(todo => !todo.completado)), // devolvemos un array con todos los elementos del state que no sean completados de esta manera descartamos los completados
);



//   TODO: Esta es la version del curso
//   export function todoReducer(state:any, action:any){
//       return _todoReducer(state, action);
//   }







//   Recordemos que un reducer, recibe dos cosas un state y una accion, a grandes razgos lo que realiza es generar un NUEVO STATE modificandolo en base a la accion que nos manden, nota! NUEVA STATE, el state no se muta, siempre obtendremos uno nuevo