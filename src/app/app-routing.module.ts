import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GetsComponent } from './gets/gets.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'gets', component: GetsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
