import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { TermoComponent } from './pages/tela-inicial/termo/termo.component';

/* Pages */
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PerfilInvestidorComponent } from './pages/perfil-investidor/perfil-investidor.component';
import { CadastroRealizadoComponent } from './pages/cadastro-realizado/cadastro-realizado.component';

/* Modules */


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    NotFoundComponent,
    TermoComponent,
    PerfilInvestidorComponent,
    CadastroRealizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
