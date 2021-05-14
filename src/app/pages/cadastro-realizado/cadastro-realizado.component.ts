import { Component, OnInit } from '@angular/core';

import { FormService } from 'src/app/providers/form.service';
import { Form } from 'src/app/providers/model/form.model';

@Component({
  selector: 'app-cadastro-realizado',
  templateUrl: './cadastro-realizado.component.html',
  styleUrls: ['./cadastro-realizado.component.scss']
})
export class CadastroRealizadoComponent implements OnInit {

  // variável que indica se o questionário de perfil de investidor foi preenchido
  invProfile = false;
  formData:any = null;
  formQuestions:Form;
  

  constructor(private formService : FormService) { 

  }

  ngOnInit(): void {
    this.formService.currentFormData.subscribe(formData => (this.formData = formData));
    this.formQuestions = this.formService.formQuestions; 
    console.log(this.formData)
    console.log(this.formQuestions)
  }

}
