import { NgModule, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PizzaApiService } from '../../service/pizza-api-service';
import { Injectable } from '@angular/core';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TabsComponent implements OnInit {

   constructor(private login: PizzaApiService) { }

    items: MenuItem[];
    user:  string | null;
    ngOnInit(){
       this.user = localStorage.getItem('user');
       this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
          { label: 'Menu', icon: 'pi pi-fw pi-calendar', routerLink: 'menu' },
      ];
    }

    setUser(user:string){
    console.log(user);
      this.user = user;
      this.ngOnInit();
    }
}
