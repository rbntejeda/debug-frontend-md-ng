import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { DebugViewComponent } from './debug-view/debug-view.component';
import { DebugAdminComponent } from './debug-admin/debug-admin.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { DeviceAdminComponent } from './device-admin/device-admin.component';
import { LayoutComponent } from './layout/layout.component';
import { AppMaterialModule } from './material-module';

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
    DeviceAdminComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
