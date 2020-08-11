import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/observables', pathMatch: 'full' },
  { path: 'observables', loadChildren: () => import('./components/observables/observables.module').then(r => r.ObservablesModule) },
  { path: 'promise', loadChildren: () => import('./components/promise/promise.module').then(r => r.PromiseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
