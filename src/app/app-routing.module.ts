import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ProductListComponent } from './product-list/product-list.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent, canActivate: [AuthguardGuard]},
  { path: 'account', loadChildren: accountModule},
  { path: '**', redirectTo: 'account/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
