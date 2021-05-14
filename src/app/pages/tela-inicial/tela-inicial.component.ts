import { Component, OnInit } from '@angular/core';
import { TermoComponent } from './termo/termo.component'
import { MatDialog } from '@angular/material/dialog';
import { FormService } from 'src/app/providers/form.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  constructor(public dialog: MatDialog, private formService : FormService) { }

  formData:any = null;

  openDialog(): void {
    const dialogRef = this.dialog.open(TermoComponent, {
      panelClass: 'termo',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.formService.currentFormData.subscribe(formData => (this.formData = formData));
  }

}
