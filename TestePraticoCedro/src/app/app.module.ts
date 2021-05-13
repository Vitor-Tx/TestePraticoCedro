import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { TermoComponent } from './pages/tela-inicial/termo/termo.component';

/* Pages */
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/* Modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilInvestidorComponent } from './pages/perfil-investidor/perfil-investidor.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    NotFoundComponent,
    TermoComponent,
    PerfilInvestidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
