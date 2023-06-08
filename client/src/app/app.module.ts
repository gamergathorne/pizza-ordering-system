import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { PizzaApiService } from './service/pizza-api-service';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataViewModule
  ],
  providers: [PizzaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
