import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultComponent } from './dashboard/default/default.component';
import { CustomComponent } from './dashboard/custom/custom.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DefaultComponent, CustomComponent],
  imports: [ModulesRoutingModule],
})
export class ModulesModule {}
