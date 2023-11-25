import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
     path: 'signin-callback', component: SigninRedirectCallbackComponent 
  },
  {
    path: 'signout-callback', component: SignoutRedirectCallbackComponent  
  },
  {
    path: 'my-component', component: MyComponentComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
