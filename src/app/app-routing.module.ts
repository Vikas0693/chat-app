import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './common/chat-window.component';

const routes: Routes = [
  { path:'chat', component:ChatWindowComponent },
  { path:'', pathMatch:'full', redirectTo:'chat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
