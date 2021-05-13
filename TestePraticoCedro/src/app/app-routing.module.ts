import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Pages */
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TelaInicialComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
