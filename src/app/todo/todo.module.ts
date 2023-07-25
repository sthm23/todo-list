import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MaterialsModule } from '../materials/materials.module';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { TodoMoreComponent } from './components/todo-more/todo-more.component';
import { TodoNotFoundComponent } from './pages/todo-not-found/todo-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    TodoMainComponent,
    TodoMoreComponent,
    TodoNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent, children: [
          {
            path: '', component: TodoMainComponent
          },
          {
            path: 'error', component: TodoNotFoundComponent
          },
          {
            path: '**', component: TodoMoreComponent, title: 'more info'
          },
        ]
      }
    ]),
    MaterialsModule
  ],
  exports: []
})
export class TodoModule { }
