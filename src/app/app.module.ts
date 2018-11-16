import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DebugViewComponent } from './debug-view/debug-view.component';
import { DebugAdminComponent } from './debug-admin/debug-admin.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { DeviceAdminComponent } from './device-admin/device-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DebugViewComponent,
    DebugAdminComponent,
    LoginComponent,
    UserProfileComponent,
    UserAdminComponent,
    UserCreateComponent,
    DeviceViewComponent,
    DeviceAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
