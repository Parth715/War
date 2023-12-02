import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Project/home/home.component';
import { RouterModule } from '@angular/router';
import { RulesComponent } from './Project/rules/rules.component';
import { PlayComponent } from './Project/play/play.component';

@NgModule({
  declarations: [
    HomeComponent,
    RulesComponent,
    PlayComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AppModule { }
