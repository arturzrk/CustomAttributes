import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';

const routes: Routes = [{
  path: '',
  component: AttributesFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
