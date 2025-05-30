import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: ()=>
            import('./components/timeline/timeline.component')
            .then(m => m.TimelineComponent)
    }
];
