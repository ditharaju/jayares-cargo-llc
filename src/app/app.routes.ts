import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: 'about-us', component: AboutMeComponent }, // Replace with your component for tab A
    { path: 'our-services', component: ServicesOfferedComponent }, // Replace with your component for tab B
    { path: 'contacts', component: FooterComponent }, // Replace with your component for tab C
    { path: '**', redirectTo: '' }, // Redirect to default route for unmatched paths
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
