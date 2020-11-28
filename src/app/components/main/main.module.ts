import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainService} from './main.service';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {RatingComponent} from './rating/rating.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HeaderComponent} from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NotificationsComponent} from './notifications/notifications.component';
import {DataBaseComponent} from './data-base/data-base.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { ForumMainComponent } from './forum-main/forum-main.component';
import {ForumComponent} from './forum-main/forum/forum.component';
import {TopicComponent} from './forum-main/forum/topic/topic.component';
import {DetailComponent} from './forum-main/forum/topic/detail/detail.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    MainComponent,
    RatingComponent,
    ForumComponent,
    HeaderComponent,
    NotificationsComponent,
    DataBaseComponent,
    TopicComponent,
    DetailComponent,
    ForumMainComponent,
    ProfileComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule
    ],
  providers: [MainService],
})

export class MainModule {}
