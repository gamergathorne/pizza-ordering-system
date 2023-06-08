import { NgModule, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { PizzaApiService } from '../../service/pizza-api-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService]
})

export class LoginComponent {
  constructor(private fb: FormBuilder, private api: PizzaApiService ,private router: Router, private messageService: MessageService, private tabs: TabsComponent) { }
  submitted = false;
  loginForm = this.fb.group({
        username: ['',Validators.required],
        password: ['', Validators.required]
  })
  private uri = 'https://pizza-api-app.herokuapp.com/api/auth';
  onSubmit() {
    this.api.PostMessage(this.loginForm, this.uri)
        .subscribe(response => {
          this.successLogin(response);
        }, error => {
          this.showErrorMessage();
        })
  }
  successLogin(response: any){
   localStorage.setItem('user', JSON.stringify(this.loginForm.value['username']));
   localStorage.setItem('auth', response['access_token']);
   this.tabs.setUser(this.loginForm.value['username']!);
   this.router.navigate(['home']).then(() => {
                                     window.location.reload();
                                   });
  }
   showErrorMessage(){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error sending message.' });
   }
}
