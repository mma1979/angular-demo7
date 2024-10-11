import { Routes } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { AdminComponent } from './compnents/admin/admin.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { ClientComponent } from './compnents/client/client.component';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'client', component: ClientComponent, canActivate: [authGuardGuard]},
    {path:'admin', component: AdminComponent, canActivate: [authGuardGuard, roleGuard]},

    {path: '**',  component: HomeComponent}


];
