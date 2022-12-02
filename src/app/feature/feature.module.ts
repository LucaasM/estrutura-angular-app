import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponentAComponent } from './component/example-component-a/example-component-a.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing-module';



@NgModule({
  declarations: [
    ExampleComponentAComponent,
  ],
  imports: [
    CommonModule, SharedModule, FeatureRoutingModule
  ]
})
export class FeatureModule { }
