import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {
  @Input() topic;
  constructor() { }

  ngOnInit(): void {
  }

}
