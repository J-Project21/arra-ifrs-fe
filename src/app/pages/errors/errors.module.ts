import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Page400Component } from './page400/page400.component';
import { Page401Component } from './page401/page401.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { Page405Component } from './page405/page405.component';
import { Page408Component } from './page408/page408.component';
import { Page500Component } from './page500/page500.component';
import { UnknownComponent } from './unknown/unknown.component';

@NgModule({
  declarations: [
    Page400Component,
    Page401Component,
    Page403Component,
    Page404Component,
    Page405Component,
    Page408Component,
    Page500Component,
    UnknownComponent,
  ],
  imports: [CommonModule, NzResultModule, NzButtonModule],
})
export class ErrorsModule {}
