import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "./layout/layout.component";
import { DebugAdminComponent } from "./debug-admin/debug-admin.component";
import { DeviceAdminComponent } from "./device-admin/device-admin.component";
import { LoginComponent } from './login/login.component';
import { DebugViewComponent } from './debug-view/debug-view.component';
import { DeviceViewComponent } from './device-view/device-view.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { 
    path:'debug',
    component:LayoutComponent,
    children:[
      { path:'', component:DebugAdminComponent },
      { path:':id', component:DebugViewComponent }
    ]
  },
  { 
    path:'device',
    component:LayoutComponent,
    children:[
      { path:'', component:DeviceAdminComponent },
      { path:':id', component:DeviceViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
