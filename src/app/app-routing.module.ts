import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ContentComponent} from './components/content/content.component';

const routes: Routes = [
	{path: 'home', component: AppComponent},
	{path: '', component: ContentComponent},
	{path: 'signin', loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule) },
	{path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
	{path: 'sc', loadChildren: () => import('./components/sc/sc.module').then(m => m.ScModule) },
	{path: 'buy', loadChildren: () => import('./components/buy/buy.module').then(m => m.BuyModule) }
];	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
