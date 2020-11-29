import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  userList = [
    {
      name: 'Сидоров Александр',
      position: 'Инженер'
    },
    {
      name: 'Сергей Ванг',
      position: 'Инженер'
    },
    {
      name: 'Кармазов Степан',
      position: 'Инженер'
    },
    {
      name: 'Игорь Александрович',
      position: 'Инженер'
    },
    {
      name: 'Сидоров Александр',
      position: 'Инженер'
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
