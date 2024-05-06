import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
    { path: 'home', component: IntroComponent },
    { path: 'about-us', component: AboutMeComponent },
    { path: 'our-services', component: ServicesOfferedComponent },
    { path: 'contacts', component: FooterComponent },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
