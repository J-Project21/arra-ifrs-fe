import { RenderMenuPipe } from 'src/shared/pipes/menu-render.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, RenderMenuPipe],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
