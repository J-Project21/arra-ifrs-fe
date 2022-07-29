import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';

const usedModules = [
  NzLayoutModule,
  NzButtonModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzCheckboxModule,
  IconsProviderModule,
  NzTypographyModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzSpaceModule,
];

@NgModule({
  imports: usedModules,
  exports: usedModules,
})
export class SharedModule {}
