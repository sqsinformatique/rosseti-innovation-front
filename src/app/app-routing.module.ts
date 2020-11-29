import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {DetailComponent} from './components/main/forum-main/forum/topic/detail/detail.component';
import {ForumComponent} from './components/main/forum-main/forum.component';
import {ProfileComponent} from './components/main/profile/profile.component';
import {NotificationsComponent} from './components/main/notifications/notifications.component';
import {DataBaseComponent} from './components/main/data-base/data-base.component';
import {RatingComponent} from './components/main/rating/rating.component';
import {LoginGuard} from './globals/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/topic',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        redirectTo: 'topic',
        pathMatch: 'full'
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'data-base',
        component: DataBaseComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'topic',
        component: ForumComponent,
      },
      {
        path: 'topic/:id',
        component: DetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
