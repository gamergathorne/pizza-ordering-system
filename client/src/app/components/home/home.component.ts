import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { Table } from 'primeng/table';
import { PizzaApiService } from '../../service/pizza-api-service';
import { MessageService } from 'primeng/api';
import { OrderModel } from '../../models/order.model';
import { Router } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [MessageService]

})

export class HomeComponent {

    constructor(private api: PizzaApiService, private messageService: MessageService,private router: Router, private tabs: TabsComponent) {
      this.tabs.ngOnInit();
    }
    orders: OrderModel[];
    ngOnInit(){
      this.getOrders();
    }
    getOrders(){
      let getUri = 'https://pizza-api-app.herokuapp.com/api/orders';
      this.api.GetMessage(getUri).then(response => {
          this.setOrders(response);
      }, error => {
         console.log(error);
       })
    }
    setOrders(resp: any){
      this.orders = resp;
    }
    deleteOrder(order: number){
      let deleteUri = 'https://pizza-api-app.herokuapp.com/api/orders';
      let deleteConfirm = this.api.DeleteMessage(deleteUri, order);
      if(deleteConfirm == true ){
        this.showConfirmMessage(order);
        this.getOrders();
      }
    }
    showConfirmMessage(orderNum: number){
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order has been deleted.' });
    }
    clear(table: Table) {
           table.clear();
    }
    filterResponse(event){
      return event.target.value;
    }
}
