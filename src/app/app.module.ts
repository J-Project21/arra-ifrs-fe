import { HomeModule } from './layout/home/home.module';
import en from '@angular/common/locales/en';

import { ReactiveFormsModule } from '@angular/forms';

import { ErrorHandler, NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from 'src/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth';
import { environment } from 'src/environments/environment';
import { GlobalErrorHandler } from './core/errors/global-error-handler';
import { NzMessageService } from 'ng-zorro-antd/message';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    HomeModule,
  ],
  providers: [
    NzMessageService,
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: 'API_BASE_URL',
      useValue: environment.apiBaseUrl,
      multi: true,
    },
    {
      provide: 'APP_BASE_HREF',
      useValue: environment.appBaseHref,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
