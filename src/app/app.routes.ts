import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ""
    },
    {
        path: '',
        loadChildren: () => import('./pages/home/home.routes').then(m => m.HOMECOMPONENT)
    },
    {
        path: '',
        loadChildren: () => import('./pages/work/work.routes').then(m => m.WORKCOMPONENT)
    }
    ,
    {
        path: '',
        loadChildren: () => import('./pages/proyects/proyects.routes').then(m => m.PROYECTSCOMPONENT)
    },
    {
        path: '',
        loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUTCOMPONENT)
    },
    { path: '**', redirectTo: '' }

];
