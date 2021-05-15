import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Form } from "./model/form.model";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';



@Injectable({
    providedIn:"root"
})
export class FormService{

    constructor(private http:HttpClient){

    }

    //variável com as respostas do formulário
    public formData: {[k: string]: any} = null;
    //variável com as perguntas do formulário, que serão obtidas pela "api" simulada
    public formQuestions: Form;
    private formDataSource = new  BehaviorSubject(this.formData);
    currentFormData = this.formDataSource.asObservable();
    url: string = environment.apiURL


    //Função que atualiza formQuestions, que pode ser obtida por todos os 
    //componentes que importarem esse serviço
    changeFormData(formData: {[k: string]: any} = {}, formResponse: Form) {
        this.formQuestions = formResponse;
        this.formDataSource.next(formData)
    }
    
    getFormData():Observable<Form>{
        
        return this.http.get<Form>("/api/form")
    }
}
