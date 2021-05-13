import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.scss']
})
export class PerfilInvestidorComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  investorForm: FormGroup;
  disableBtn = true;
  familiaridades = ['Nunca operei', 'Opero pouco e não tenho familiaridade', 'Opero eventualmente e conheço os riscos associados', 'Opero frequentemente e conheço os riscos associados']

  ngOnInit(): void {

    this.investorForm = this.formbuilder.group({
      comportamento: ['', [Validators.required]],
      tempo: ['', [Validators.required]],
      porcentagem: ['', [Validators.required]],
      renda_fixa: ['', [Validators.required]],
      fundos: ['', [Validators.required]],
      acoes_vista: ['', [Validators.required]],
      acoes_aluguel: ['', [Validators.required]],
    });

  }

  getFormValidationErrors() {
    Object.keys(this.investorForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.investorForm.get(key).errors;

      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  onSubmit(): void{

    if (this.investorForm.invalid) {
      this.getFormValidationErrors();
      return;
    }
    if (this.investorForm.valid) {
      console.log('Profile form data :: ', this.investorForm.value);
    }


  }

}
