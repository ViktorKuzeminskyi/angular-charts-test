import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TreemapComponent} from './treemap/treemap.component';
import {ResourcesComponent} from './resources/resources.component';

const routes: Routes = [
  {path: '', redirectTo: '/dpm', pathMatch: 'full'},
  {path: 'dpm', component: TreemapComponent},
  {path: 'dpm/:id', component: ResourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
