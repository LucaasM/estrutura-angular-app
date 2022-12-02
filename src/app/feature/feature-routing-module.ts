import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponentAComponent } from './component/example-component-a/example-component-a.component';

const routes: Routes = [
    {
      path: '',
      component: ExampleComponentAComponent
    }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureRoutingModule{}