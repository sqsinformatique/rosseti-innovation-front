import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic;
  constructor() { }

  ngOnInit(): void {
  }

}
