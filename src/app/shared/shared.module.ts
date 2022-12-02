import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleButtonAComponent } from './component/example-button-a/example-button-a.component';



@NgModule({
  declarations: [
    ExampleButtonAComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], 
  exports: [FormsModule, ExampleButtonAComponent]
})
export class SharedModule { }
