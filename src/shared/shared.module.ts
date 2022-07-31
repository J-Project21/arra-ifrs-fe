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
import { FormHandlerComponent } from './widgets/form-handler/form-handler.component';
import { EditorActionComponent } from './widgets/editor-action/editor-action.component';
import { EditorApprovalComponent } from './widgets/editor-approval/editor-approval.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { ArraTableComponent } from './components/arra-table/arra-table.component';
import { ArraEditorComponent } from './components/arra-editor/arra-editor.component';
import { CommonModule } from '@angular/common';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

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
  NzTableModule,
  NzPopoverModule,
  NzSkeletonModule,
];

@NgModule({
  imports: [CommonModule, usedModules],
  exports: [...usedModules, FormHandlerComponent, ArraTableComponent],
  declarations: [
    FormHandlerComponent,
    EditorActionComponent,
    EditorApprovalComponent,
    ArraTableComponent,
    ArraEditorComponent,
  ],
})
export class SharedModule {}
