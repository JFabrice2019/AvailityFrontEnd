import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { EnrolleesComponent } from './enrollees/enrollees.component';

const routes: Routes = [
  { path: '', component: EnrollFormComponent },
  { path: 'form', component: EnrollFormComponent },
  { path: 'enrollees', component: EnrolleesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [EnrollFormComponent, EnrolleesComponent];
