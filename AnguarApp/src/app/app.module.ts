import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Hammer
import 'hammerjs';

//Angular Material
import { MaterialModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';

//Services
import { AuthService } from './core/auth/auth.service';

//Components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    MaterialModule,

    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdTooltipModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    { provide: 'auth',  useClass: AuthService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);