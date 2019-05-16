import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebComponent } from './web/web.component';


const routes: Routes = [
    {
        path: '',
        component: WebComponent,
        data: {Title: 'Start creating a stunning website today | Syftedesigns.com'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
