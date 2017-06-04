import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './form/login/login.component';

//Services
import { AuthService } from './core/auth/auth.service';
import { UserService } from './core/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'auth',  useClass: AuthService },
    { provide: 'user', useClass: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
