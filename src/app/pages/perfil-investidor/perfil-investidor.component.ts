import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors} from '@angular/forms';
import { FormService } from 'src/app/providers/form.service';
import { Router } from '@angular/router';
import { Form } from 'src/app/providers/model/form.model';

@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.scss']
})
export class PerfilInvestidorComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, 
    private formService : FormService, 
    private router: Router,) { }

  //verifica se está carregando
  isLoading = false;

  //variável que obtém as perguntas e opções para a construção do formulário
  formResponse: Form;
  investorForm: FormGroup;
  disableBtn = true;

  //lista de opções da pergunta 4, que podiam ser inseridas normalmente
  familiaridades = ['Nunca operei', 
  'Opero pouco e não tenho familiaridade', 
  'Opero eventualmente e conheço os riscos associados', 
  'Opero frequentemente e conheço os riscos associados']

  ngOnInit(): void {
    this.investorForm = this.formbuilder.group({});
    this.buildForm();

  }

  //função para construção do formulário. Aqui ela obtém a resposta da 
  //simulação de "api", que contém os dados necessários para a construção.
  async buildForm(){
    let group = {}
    this.isLoading = true;
    try{
      this.formResponse = await this.formService.getFormData().toPromise();
    }

    catch(exception){
      this.isLoading = false;
      console.log(exception);
      return;
    }
    
    for(let r of this.formResponse.radios){
      group[r.id] = this.formbuilder.control('', Validators.required)
    }

    for(let s of this.formResponse.selects){
      group[s.id] = this.formbuilder.control('', Validators.required)
    }

    
    this.investorForm = this.formbuilder.group(group);

    this.isLoading = false;

  }


  //Ao enviar o formulário, as respostas ficam salvas no serviço FormService,
  //e a partir dele a página #4 pode obtê-las e informá-las ao usuário.
  onSubmit(): void{

    if (this.investorForm.invalid) {
      return;
    }

    var formData: {[k: string]: any} = {};

    Object.keys(this.investorForm.controls).forEach(key => {
      formData[key] = this.investorForm.get(key).value;
    });

    this.formService.changeFormData(formData, this.formResponse);
    this.router.navigate(['/cadastro-realizado']);


  }

}
