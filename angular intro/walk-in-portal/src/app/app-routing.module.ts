import { DetailsDesignerComponent } from './details-designer/details-designer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { DetailsMultipleComponent } from './details-multiple/details-multiple.component';
import { DetailsDevelopmentComponent } from './details-development/details-development.component';

const routes: Routes = [
  {path: "" , component:LoginFormComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"details-designer", component:DetailsDesignerComponent},
  {path:"details-multiple", component:DetailsMultipleComponent},
  {path:"details-development", component:DetailsDevelopmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
