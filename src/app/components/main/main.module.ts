import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainService} from './main.service';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {MatButtonModule} from '@angular/material/button';
import {CheckListComponent} from './checklist/checklist.component';


@NgModule({
  declarations: [
    MainComponent,
    TasksComponent,
    OrderComponent,
    CheckListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [MainService],
})

export class MainModule {}
