import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainService} from './main.service';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HeaderComponent} from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ForumComponent} from './forum/forum.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {DataBaseComponent} from './data-base/data-base.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TopicComponent } from './forum/topic/topic.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ForumComponent,
    HeaderComponent,
    NotificationsComponent,
    DataBaseComponent,
    TopicComponent,
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
