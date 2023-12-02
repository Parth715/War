import { HomeComponent } from './Project/home/home.component';
import { RulesComponent } from './Project/rules/rules.component';
import { PlayComponent } from './Project/play/play.component';
import { Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'rules', component: RulesComponent},
    {path: 'play', component: PlayComponent},
    {path: '**', redirectTo: "/home"}
];
export default routes;