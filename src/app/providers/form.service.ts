import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Form } from "./model/form.model";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from "rxjs/internal/Subject";


@Injectable({
    providedIn:"root"
})
export class FormService{

    constructor(private http:HttpClient){

    }

    public formData: {[k: string]: any} = null;
    public formQuestions: Form;
    public subject = new Subject<any>();
    private formDataSource = new  BehaviorSubject(this.formData);
    currentFormData = this.formDataSource.asObservable();


    changeFormData(formData: {[k: string]: any} = {}, formResponse: Form) {
        this.formQuestions = formResponse;
        this.formDataSource.next(formData)
    }
    
    url: string = environment.apiURL
    
    getFormData():Observable<Form>{
        
        return this.http.get<Form>("/api/form")
    }
}
