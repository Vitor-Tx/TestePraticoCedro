import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Pages */
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CadastroRealizadoComponent } from './pages/cadastro-realizado/cadastro-realizado.component';
import { PerfilInvestidorComponent } from './pages/perfil-investidor/perfil-investidor.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TelaInicialComponent },
  { path: 'cadastro-realizado', component: CadastroRealizadoComponent },
  { path: 'perfil-investidor', component: PerfilInvestidorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
