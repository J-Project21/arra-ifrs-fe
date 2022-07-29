import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ErrorsModule } from '../pages/errors/errors.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, ErrorsModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
