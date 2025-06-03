import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./public/pages/home/home.component').then(
                (m) => m.HomeComponent
            ),
    },
    {
        path: 'design-lab',
        loadChildren: () =>
            import('./public/pages/design-lab/design-lab.component').then(
                (m) => m.DesignLabComponent
            ),
    },
];
