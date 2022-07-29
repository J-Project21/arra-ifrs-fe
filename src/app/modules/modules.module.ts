import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultComponent } from './dashboard/default/default.component';
import { CustomComponent } from './dashboard/custom/custom.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [DefaultComponent, CustomComponent, FormComponent],
  imports: [ModulesRoutingModule, SharedModule],
})
export class ModulesModule {}
