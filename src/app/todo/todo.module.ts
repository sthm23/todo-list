import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ]),
    MaterialsModule
  ],
  exports: []
})
export class TodoModule { }
