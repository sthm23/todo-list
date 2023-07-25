import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent, children: [
          {
            path: '', redirectTo: 'login', pathMatch: 'full'
          },
          {
            path: 'login', component: LoginComponent
          }
        ]
      }
    ])
  ]
})
export class AuthModule { }
