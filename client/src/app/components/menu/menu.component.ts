import { NgModule, Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { PizzaApiService } from '../../service/pizza-api-service';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [MessageService]
})

export class MenuComponent {
  constructor(private fb: FormBuilder, private api: PizzaApiService , private messageService: MessageService) { }
    uri = 'https://pizza-api-app.herokuapp.com/api/orders';
    visible: boolean;
    currentFlavor: string;
    selectedCrust: string;
    selectedSize: string;
    crusts = [{name: 'Select Crust', code: ''}, {name:'Normal',code:'NORMAL'},{name:'Thin',code:'THIN'}];
    sizes = [{name:'Select Size', code: ''},{name:'Small',code:'S'},{name:'Medium',code:'M'},{name:'Large',code:'L'},{name:'Extra Large',code:'XL'}];

    items = [
      {flavor: "Cheese",description:"Description of Cheese goes here."},
      {flavor: "Chicken Fajita",description:"Description of Chicken Fajita goes here."},
      {flavor: "Meat Lovers",description:"Description of Meat Lovers goes here."},
      {flavor: "Pepperoni",description:"Description of Pepperoni goes here."},
      {flavor: "Philly Cheese steak",description:"Description of Philly Cheese steak goes here."},
      {flavor: "Sausage",description:"Description of Sausage goes here."},
      {flavor: "Supreme",description:"Description of Supreme goes here."}
    ]
    orderForm = this.fb.group({
          Crust: ["", [Validators.required, Validators.min(1)]],
          Flavor: [''],
          Size: ["", [Validators.required, Validators.min(1)]],
          Table_No: ['']
    })

   openOrder(flavor: string){
      this.visible = true;
      this.currentFlavor = flavor;
   }
  onSubmit(){


    let submittingForm = this.fb.group({
      Crust: [this.selectedCrust['code']],
      Flavor: [this.currentFlavor],
      Size: [this.selectedSize['code']],
      Table_No: [this.orderForm.controls['Table_No'].value]
    })

      console.log(submittingForm);
      this.api.PostMessage(submittingForm, this.uri)
            .subscribe(response => {
              this.showConfirmMessage();
            }, error => {
              this.showErrorMessage();
            })
  }
  showConfirmMessage(){
        this.visible = false;

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your order has been placed.' });
        this.orderForm.reset();
   }
   showErrorMessage(){
           this.visible = false;

        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'There was an issue placing your order.' });
        this.orderForm.reset();
   }
}
