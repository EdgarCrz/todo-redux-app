import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NGRX
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment



import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    
    ReactiveFormsModule
    ,
    // TODO:En esta parte es donde estamos indicandole a nuestra aplicacion
    // cuales son los reducers que va a utilizar, en este caso como vamos a generar varios de
    // podemos englobarlos en este caso en "appReducers" ahi vienen todos los reducer que la aplicacion puede usar
    StoreModule.forRoot(
      appReducers ,
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
      ),
    
      // importamos el reducer, para poder hacer uso de "la modificacion del state" de manera global
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
