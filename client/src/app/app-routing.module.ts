import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path : 'home', component: HomeComponent, pathMatch:'full', outlet: '', canActivate: [AuthGuard] },
    { path : 'menu', component: MenuComponent, pathMatch:'full', outlet: '', canActivate: [AuthGuard] },
    { path : 'login', component: LoginComponent, pathMatch:'full', outlet: '' },
    { path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
