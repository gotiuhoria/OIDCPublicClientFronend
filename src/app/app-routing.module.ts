import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';

const routes: Routes = [
  {
     path: 'signin-callback', component: SigninRedirectCallbackComponent 
  },
  {
    path: 'other-comp', component: OtherComponentComponent 
  },
  {
    path: 'signout-callback', component: SignoutRedirectCallbackComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
