import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './dashboard/default/default.component';

const routes: Routes = [
  { path: 'form/:formCode', component: FormComponent },
  { path: ':moduleName/dashboard', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
