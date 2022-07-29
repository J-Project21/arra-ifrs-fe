import { RenderMenuPipe } from 'src/shared/pipes/menu-render.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { SharedModule } from 'src/shared/shared.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [HomeComponent, RenderMenuPipe],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzBadgeModule,
    SharedModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
